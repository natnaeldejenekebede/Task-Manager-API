import { Request, Response } from 'express';
import { Task } from '../entities/task/Task';
import { funcExec } from '../utilities/funcExec';
import { getTasksInteractor } from '../interactors/getTasksInteractor';
import { getTasksPersistence } from '../persistence/in-memory/getTasksPersistence';

export const getTasksController = (
  req: Request,
  res: Response<{
    status: number;
    message: string;
    tasks?: Task[];
  }>
) => {
  const [tasks, error] = funcExec(getTasksInteractor, { getTasksPersistence });

  if (!tasks) {
    res.status(500).json({
      status: 500,
      message: 'Could not get tasks.',
    });
    return;
  }

  res.json({
    status: 200,
    message: `Tasks got successfully!`,
    tasks,
  });
};
