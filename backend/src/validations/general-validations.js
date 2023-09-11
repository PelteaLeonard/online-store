import { body, check } from "express-validator";

export const paramIdValidation = check("id")
  .exists()
  .withMessage("Id is missing from params!")
  .isUUID()
  .withMessage("Id is not UUID format!");

export const paramNameValidation = check("name")
  .exists()
  .withMessage("Name is missing from params");

export const paramLastNameValidation = check("lastName")
  .exists()
  .withMessage("Last name is missing from params");

export const paramFirstNameValidation = check("firstName")
  .exists()
  .withMessage("First name is missing from params");

export const paramDescriptionValidation = check("description")
  .exists()
  .withMessage("Description is missing from params");

export const paramEmailValidation = check("email")
  .exists()
  .withMessage("Email is missing from params");

export const paramPasswordValidation = check("password")
  .exists()
  .withMessage("Password is missing from params");

export const paramTokenValidation = check("token")
  .exists()
  .withMessage("Token is missing from params");

export const bodyNameValidation = body("name")
  .exists()
  .withMessage("Name is missing from body!");

export const bodyFirstNameValidation = body("firstName")
  .exists()
  .withMessage("First name is missing from body!");

export const bodyLastNameValidation = body("lastName")
  .exists()
  .withMessage("Last name is missing from body!");

export const bodyDescriptionValidation = body("description")
  .exists()
  .withMessage("Description is missing from body!");

export const bodyEmailValidation = body("email")
  .exists()
  .withMessage("Email is missing from body!");

export const bodyPasswordValidation = body("password")
  .exists()
  .withMessage("Password is missing from body!");

export const bodyTokenValidation = body("token")
  .exists()
  .withMessage("Token is missing from body!");
