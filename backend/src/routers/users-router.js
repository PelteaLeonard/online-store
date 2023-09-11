import { Router } from "express";

import {
  createValidations,
  deleteByEmailValidation,
  deleteByFirstNameValidations,
  deleteByIdValidations,
  deleteByLastNameValidations,
  getByEmailValidations,
  getByFirstNameValidations,
  getByIdValidations,
  getByLastNameValidations,
  updateByIdValidations,
} from "../validations/user-validations.js";
import validationMiddleware from "../middlewares/validation-middleware.js";
import UserController from "../controllers/user-controller.js";
import { userService } from "../services/instances.js";

const router = Router();

const userController = new UserController(userService);

const {
  getAll,
  create,
  getById,
  deleteAll,
  deleteById,
  getByEmail,
  updateById,
  deleteByEmail,
  getByLastName,
  getByPassword,
  getByFirstName,
  deleteByLastName,
  deleteByPassword,
  deleteByFirstName,
} = userController;

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
  "/email/:email",
  getByEmailValidations,
  validationMiddleware,
  getByEmail
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
  "/email/:email",
  deleteByEmailValidation,
  validationMiddleware,
  deleteByEmail
);

export default router;
