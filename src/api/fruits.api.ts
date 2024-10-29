import { DATA_VALIDATION_ERROR_MESSAGE, REQUEST_RETRY_NUMBER, RETRY_FETCH_MESSAGE, UNEXPECTED_ERROR_MESSAGE } from '../constants';
import { Fruit } from '../entities/fruit-item';
import { FruitArraySchema } from './validation.zod';
import { ValidationError } from './errors.instances';
import { z } from 'zod';

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