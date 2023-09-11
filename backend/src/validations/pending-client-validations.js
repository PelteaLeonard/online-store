import {
  bodyEmailValidation,
  bodyFirstNameValidation,
  bodyLastNameValidation,
  bodyTokenValidation,
  paramEmailValidation,
  paramFirstNameValidation,
  paramIdValidation,
  paramLastNameValidation,
  paramTokenValidation,
} from "./general-validations.js";

export const createValidations = [
  bodyFirstNameValidation,
  bodyLastNameValidation,
  bodyEmailValidation,
  bodyTokenValidation,
];
export const getByIdValidations = [paramIdValidation];
export const getByFirstNameValidations = [paramFirstNameValidation];
export const getByLastNameValidations = [paramLastNameValidation];
export const getByEmailValidations = [paramEmailValidation];
export const getByTokenValidations = [paramTokenValidation];
export const updateByIdValidations = [
  paramIdValidation,
  bodyFirstNameValidation,
  bodyLastNameValidation,
  bodyEmailValidation,
  bodyTokenValidation,
];
export const deleteByIdValidations = [paramIdValidation];
export const deleteByFirstNameValidations = [paramFirstNameValidation];
export const deleteByLastNameValidations = [paramLastNameValidation];
export const deleteByEmailValidation = [paramEmailValidation];
export const deleteByTokenValidation = [paramTokenValidation];
