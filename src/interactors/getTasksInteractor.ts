import { IGetTasksPersistence } from '../persistence/IGetTasksPersistence';

type Dependencies = {
  getTasksPersistence: IGetTasksPersistence;
};

export const getTasksInteractor = ({ getTasksPersistence }: Dependencies) => {
  const tasks = getTasksPersistence();

  return tasks;
};
