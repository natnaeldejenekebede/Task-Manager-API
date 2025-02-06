import { Task } from '../entities/task/Task';

export type IUpdateTaskPersistence = (task: Task) => void;
