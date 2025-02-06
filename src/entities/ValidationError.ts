import { IValidationItem } from './IValidator';

export class ValidationError extends Error {
  constructor(public validationItems: IValidationItem[], message?: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
