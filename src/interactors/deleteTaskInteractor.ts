import { Task } from '../entities/task/Task';
import { IDeleteTaskPersistence } from '../persistence/IDeleteTaskPersistence';

type Data = {
  id: string;
};

type Dependencies = {
  deleteTaskPersistence: IDeleteTaskPersistence;
};

export const deleteTaskInteractor = (
  { id }: Data,
  { deleteTaskPersistence }: Dependencies
) => {
  deleteTaskPersistence(id);
};
