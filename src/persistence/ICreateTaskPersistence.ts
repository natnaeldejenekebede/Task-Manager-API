import { Task } from '../entities/task/Task';

export type ICreateTaskPersistence = (task: Task) => void;
