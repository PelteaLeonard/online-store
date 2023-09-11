import {
  paramIdValidation,
  bodyLastNameValidation,
  paramLastNameValidation,
  bodyFirstNameValidation,
  paramFirstNameValidation,
  bodyDescriptionValidation,
  paramDescriptionValidation,
} from "./general-validations.js";

export const createValidations = [
  bodyFirstNameValidation,
  bodyLastNameValidation,
  bodyDescriptionValidation,
];
export const getByIdValidations = [paramIdValidation];
export const getByFirstNameValidations = [paramFirstNameValidation];
export const getByLastNameValidations = [paramLastNameValidation];
export const getByDescriptionValidations = [paramDescriptionValidation];
export const updateByIdValidations = [
  paramIdValidation,
  bodyFirstNameValidation,
  bodyLastNameValidation,
  bodyDescriptionValidation,
];
export const deleteByIdValidations = [paramIdValidation];
export const deleteByFirstNameValidations = [paramFirstNameValidation];
export const deleteByLastNameValidations = [paramLastNameValidation];
export const deleteByDescriptionValidations = [paramDescriptionValidation];
