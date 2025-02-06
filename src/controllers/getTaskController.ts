import { Request, Response } from 'express';
import { Task } from '../entities/task/Task';
import { getTaskInteractor } from '../interactors/getTaskInteractor';
import { getTaskPersistence } from '../persistence/in-memory/getTaskPersistence';
import { funcExec } from '../utilities/funcExec';

export const getTaskController = (
  req: Request<{ id: string }>,
  res: Response<{ status: number; message: string; task?: Task }>
) => {
  const { id } = req.params;

  const [task, error] = funcExec(
    getTaskInteractor,
    { id },
    { getTaskPersistence }
  );

  if (error) {
    res.status(500).json({
      status: 500,
      message: 'Unexpected error occurred',
    });
    console.error(error.message);
    return;
  }

  if (!task) {
    res.status(404).json({
      status: 404,
      message: `Task with id ${id} could not be found.`,
    });
    return;
  }

  res.json({
    status: 200,
    message: `Task got successfully!`,
    task,
  });
};
