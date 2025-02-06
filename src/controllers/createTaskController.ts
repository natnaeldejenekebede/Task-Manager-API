import { Request, Response } from 'express';
import { Task } from '../entities/task/Task';
import { funcExec } from '../utilities/funcExec';
import { createTaskInteractor } from '../interactors/createTaskInteractor';
import { createTaskPersistence } from '../persistence/in-memory/createTaskPersistence';
import { IValidationItem } from '../entities/IValidator';
import { ValidationError } from '../entities/ValidationError';

export const createTaskController = (
  req: Request<{}, {}, { title: string; description: string }>,
  res: Response<{
    status: number;
    message: string;
    task?: Task;
    validationItems?: IValidationItem[];
  }>
) => {
  const { title, description } = req.body;

  const [task, error] = funcExec(
    createTaskInteractor,
    { title, description },
    { createTaskPersistence }
  );

  if (!task) {
    if (error instanceof ValidationError) {
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
    message: `Task '${title}' created successfully!`,
    task,
  });
};
