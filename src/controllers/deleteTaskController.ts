import { Request, Response } from 'express';
import { deleteTaskInteractor } from '../interactors/deleteTaskInteractor';
import { deleteTaskPersistence } from '../persistence/in-memory/deleteTaskPersistence';
import { funcExec } from '../utilities/funcExec';
import { PersistenceError } from '../persistence/PersistenceError';

export const deleteTaskController = (
  req: Request<{ id: string }>,
  res: Response<{ status: number; message: string }>
) => {
  const { id } = req.params;

  const [_, error] = funcExec(
    deleteTaskInteractor,
    { id },
    { deleteTaskPersistence }
  );

  if (error) {
    if (error instanceof PersistenceError) {
      res.status(404).json({
        status: 404,
        message: `Could not delete task with id ${id} because it does not exist!`,
      });
    } else {
      res.status(500).json({
        status: 500,
        message: 'Unexpected error occurred',
      });
    }
    console.error(error.message);
    return;
  }

  res.json({
    status: 200,
    message: `Task deleted successfully!`,
  });
};
