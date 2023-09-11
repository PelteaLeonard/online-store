import AuthorController from "../controllers/author-controller.js";
import validationMiddleware from "../middlewares/validation-middleware.js";

import { Router } from "express";
import { authorService } from "../services/instances.js";

import {
  createValidations,
  deleteByDescriptionValidations,
  deleteByFirstNameValidations,
  deleteByIdValidations,
  deleteByLastNameValidations,
  getByDescriptionValidations,
  getByFirstNameValidations,
  getByIdValidations,
  getByLastNameValidations,
  updateByIdValidations,
} from "../validations/author-validations.js";

const router = Router();

const authorController = new AuthorController(authorService);

const {
  create,
  getAll,
  getById,
  deleteAll,
  updateById,
  deleteById,
  getByLastName,
  getByFirstName,
  getByDescription,
  deleteByLastName,
  deleteByFirstName,
  deleteByDescription,
} = authorController;

router.post("", createValidations, validationMiddleware, create);

router.get("", getAll);

router.get("/:id", getByIdValidations, validationMiddleware, getById);

router.get(
  "/first-name/:firstName",
  getByFirstNameValidations,
  validationMiddleware,
  getByFirstName
);

router.get(
  "/last-name/:lastName",
  getByLastNameValidations,
  validationMiddleware,
  getByLastName
);

router.get(
  "/description/:description",
  getByDescriptionValidations,
  validationMiddleware,
  getByDescription
);

router.put("/:id", updateByIdValidations, validationMiddleware, updateById);

router.delete("", deleteAll);

router.delete("/:id", deleteByIdValidations, validationMiddleware, deleteById);

router.delete(
  "/first-name/:firstName",
  deleteByFirstNameValidations,
  validationMiddleware,
  deleteByFirstName
);

router.delete(
  "/last-name/:lastName",
  deleteByLastNameValidations,
  validationMiddleware,
  deleteByLastName
);

router.delete(
  "/description/:description",
  deleteByDescriptionValidations,
  validationMiddleware,
  deleteByDescription
);

export default router;
