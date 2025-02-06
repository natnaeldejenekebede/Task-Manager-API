import { nanoid } from 'nanoid';
import { Task } from '../entities/task/Task';
import { ICreateTaskPersistence } from '../persistence/ICreateTaskPersistence';
import { TaskValidator } from '../entities/task/TaskValidator';

type Data = {
  title: string;
  description: string;
};

type Dependencies = {
  createTaskPersistence: ICreateTaskPersistence;
};

export const createTaskInteractor = (
  { title, description }: Data,
  { createTaskPersistence }: Dependencies
) => {
  const task = new Task(nanoid(), title, description, 'pending');

  new TaskValidator(task).validate();

  createTaskPersistence(task);

  return task;
};
