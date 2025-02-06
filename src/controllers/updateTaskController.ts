import { Request, Response } from 'express';
import { Task } from '../entities/task/Task';
import { funcExec } from '../utilities/funcExec';
import { updateTaskInteractor } from '../interactors/updateTaskInteractor';
import { updateTaskPersistence } from '../persistence/in-memory/updateTaskPersistence';
import { IValidationItem } from '../entities/IValidator';
import { ValidationError } from '../entities/ValidationError';
import { PersistenceError } from '../persistence/PersistenceError';

export const updateTaskController = (
  req: Request<
    { id: string },
    {},
    { title: string; description: string; status: 'pending' | 'completed' }
  >,
  res: Response<{
    status: number;
    message: string;
    task?: Task;
    validationItems?: IValidationItem[];
  }>
) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const [task, error] = funcExec(
    updateTaskInteractor,
    { id, title, description, status },
    { updateTaskPersistence }
  );

  if (!task) {
    if (error instanceof PersistenceError) {
      res.status(404).json({
        status: 404,
        message: `Could not update task with id ${id} because it does not exist.`,
      });
    } else if (error instanceof ValidationError) {
      res.status(422).json({
        status: 422,
        message: 'Invalid task, check validation items errors.',
        validationItems: error.validationItems,
      });
    } else {
      res.status(500).json({
        status: 500,
        message:
          error instanceof Error ? error.message : 'Unexpected error occurred.',
      });
    }
    console.error(error);
    return;
  }

  res.json({
    status: 200,
    message: `Task with id ${task.id} updated successfully!`,
    task,
  });
};
