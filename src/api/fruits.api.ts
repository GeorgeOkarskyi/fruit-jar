import { Fruit } from '../entities/fruit-item';
import { FruitArraySchema } from './validation.zod';
import { z } from 'zod';
import { DATA_VALIDATION_ERROR_MESSAGE, RETRY_FETCH_MESSAGE, REQUEST_RETRY_NUMBER, UNEXPECTED_ERROR_MESSAGE } from '../constants';
import { ValidationError } from './errors.instances';

export const fetchFruits = async (retries = REQUEST_RETRY_NUMBER): Promise<Fruit[]> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_GET_FRUITS_API_URL}`);

    const data = await response.json();

    const fruits = FruitArraySchema.parse(data);

    return fruits;
  } catch (error) {
    if (retries > 0) { 
        console.warn(`${ RETRY_FETCH_MESSAGE }(${retries})`);

        return fetchFruits(retries - 1);
    } else if (error instanceof z.ZodError) {
        console.error(error.errors);

        throw new ValidationError(DATA_VALIDATION_ERROR_MESSAGE, error.errors);
    } else {
        console.error(error);
      
        throw new Error(UNEXPECTED_ERROR_MESSAGE);
    }
  }
};