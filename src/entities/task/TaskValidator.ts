import { IValidationItem, IValidate } from '../IValidator';
import { ValidationError } from '../ValidationError';
import { Task } from './Task';

const titleLength = 60;
const descriptionLength = 300;

export class TaskValidator implements IValidate {
  constructor(private task: Task) {}

  validate(): void {
    const validationItems: IValidationItem[] = [];
    if (this.task.title.length > titleLength) {
      validationItems.push({
        property: 'title',
        message: `Title cannot be over ${titleLength} of length.`,
      });
    }

    if (this.task.description.length > descriptionLength) {
      validationItems.push({
        property: 'description',
        message: `Description cannot be over ${descriptionLength} of length.`,
      });
    }

    if (validationItems.length) {
      throw new ValidationError(
        validationItems,
        `Task failed validation, check validation's items for more info.`
      );
    }
  }
}
