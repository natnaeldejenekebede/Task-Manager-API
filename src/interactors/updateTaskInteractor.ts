import { Task } from '../entities/task/Task';
import { TaskValidator } from '../entities/task/TaskValidator';
import { IUpdateTaskPersistence } from '../persistence/IUpdateTaskPersistence';

type Data = {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
};

type Dependencies = {
  updateTaskPersistence: IUpdateTaskPersistence;
};

export const updateTaskInteractor = (
  { id, title, description, status }: Data,
  { updateTaskPersistence }: Dependencies
) => {
  const task = new Task(id, title, description, status);

  new TaskValidator(task).validate();

  updateTaskPersistence(task);

  return task;
};
