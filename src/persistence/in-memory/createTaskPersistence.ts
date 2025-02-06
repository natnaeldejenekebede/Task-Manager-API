import { Task } from '../../entities/task/Task';
import { ICreateTaskPersistence } from '../ICreateTaskPersistence';
import { memory } from './memory';

export const createTaskPersistence: ICreateTaskPersistence = (task: Task) => {
  memory.tasks.push(task);
};
