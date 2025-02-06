import { Task } from '../entities/task/Task';

export type IGetTaskPersistence = (id: string) => Task | undefined;
