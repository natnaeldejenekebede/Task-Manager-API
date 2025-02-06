import { IGetTaskPersistence } from '../persistence/IGetTaskPersistence';

type Data = {
  id: string;
};

type Dependencies = {
  getTaskPersistence: IGetTaskPersistence;
};

export const getTaskInteractor = (
  { id }: Data,
  { getTaskPersistence }: Dependencies
) => {
  const task = getTaskPersistence(id);

  return task;
};
