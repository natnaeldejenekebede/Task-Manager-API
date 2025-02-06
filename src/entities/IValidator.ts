export interface IValidationItem {
  property: string;
  message: string;
}

export interface IValidate {
  validate(): void;
}
