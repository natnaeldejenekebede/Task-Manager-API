import { IGetTaskPersistence } from '../IGetTaskPersistence';
import { memory } from './memory';

export const getTaskPersistence: IGetTaskPersistence = (id) => {
  return memory.tasks.find((task) => task.id === id);
};
