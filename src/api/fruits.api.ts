import axios from 'axios';
import { Fruit } from '../types/fruit-item';
import { FruitArraySchema } from './validation.zod';
import { z } from 'zod';
import { API_ERROR_MESSAGE, DATA_VALIDATION_ERROR_MESSAGE, RETRY_FETCH_MESSAGE, RETRY_NUMBER, UNEXPECTED_ERROR_MESSAGE } from '../constants';
import { NetworkError, ValidationError } from './errors.instances';

export const fetchFruits = async (retries = RETRY_NUMBER): Promise<Fruit[]> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_GET_FRUITS_API_URL}`);

    const data = response.data;

    console.log(data);

    const fruits = FruitArraySchema.parse(data);

    return fruits;
  } catch (error) {
    if (retries > 0) { 
        console.warn(`${ RETRY_FETCH_MESSAGE }(${retries})`);

        return fetchFruits(retries - 1);
    } else if (error instanceof z.ZodError) {
        console.error(error.errors);

        throw new ValidationError(DATA_VALIDATION_ERROR_MESSAGE, error.errors);
    } else if (axios.isAxiosError(error)) {
        console.error(error.message);

        throw new NetworkError(API_ERROR_MESSAGE);
    } else {
        console.error(error);
      
        throw new Error(UNEXPECTED_ERROR_MESSAGE);
    }
  }
};