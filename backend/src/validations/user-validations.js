import {
  bodyEmailValidation,
  bodyFirstNameValidation,
  bodyLastNameValidation,
  bodyPasswordValidation,
  paramEmailValidation,
  paramFirstNameValidation,
  paramIdValidation,
  paramLastNameValidation,
  paramPasswordValidation,
} from "./general-validations.js";

export const createValidations = [
  bodyFirstNameValidation,
  bodyLastNameValidation,
  bodyEmailValidation,
  bodyPasswordValidation,
];
export const getByIdValidations = [paramIdValidation];
export const getByFirstNameValidations = [paramFirstNameValidation];
export const getByLastNameValidations = [paramLastNameValidation];
export const getByEmailValidations = [paramEmailValidation];
export const updateByIdValidations = [
    paramIdValidation,
    bodyFirstNameValidation,
    bodyLastNameValidation,
    bodyEmailValidation,
]
export const deleteByIdValidations = [paramIdValidation];
export const deleteByFirstNameValidations = [paramFirstNameValidation]
export const deleteByLastNameValidations = [paramLastNameValidation]
export const deleteByEmailValidation = [paramEmailValidation]
