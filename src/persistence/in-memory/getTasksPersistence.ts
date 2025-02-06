import { IGetTasksPersistence } from '../IGetTasksPersistence';
import { memory } from './memory';

export const getTasksPersistence: IGetTasksPersistence = () => {
  return memory.tasks;
};
