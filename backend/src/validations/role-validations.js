import {
  bodyNameValidation,
  paramIdValidation,
  paramNameValidation,
} from "./general-validations.js";

export const createValidations = [bodyNameValidation];
export const getByIdValidations = [paramIdValidation];
export const getByNameValidations = [paramNameValidation];
export const updateByIdValidations = [paramIdValidation, bodyNameValidation];
export const deleteByIdValidations = [paramIdValidation];
export const deleteByNameValidations = [paramNameValidation];
