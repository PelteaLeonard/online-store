import { Router } from "express";

import validationMiddleware from "../middlewares/validation-middleware.js";
import PendingClientController from "../controllers/pending-client-controller.js";
import {
  createValidations,
  deleteByEmailValidation,
  deleteByFirstNameValidations,
  deleteByIdValidations,
  deleteByLastNameValidations,
  deleteByTokenValidation,
  getByEmailValidations,
  getByFirstNameValidations,
  getByIdValidations,
  getByLastNameValidations,
  getByTokenValidations,
} from "../validations/pending-client-validations.js";
import { pendingClientService } from "../services/instances.js";

const router = Router();

const pendingClientController = new PendingClientController(pendingClientService);

const {
  getAll,
  create,
  getById,
  deleteAll,
  getByToken,
  deleteById,
  getByEmail,
  updateById,
  deleteByEmail,
  getByLastName,
  deleteByToken,
  getByFirstName,
  deleteByLastName,
  deleteByFirstName,
} = pendingClientController;

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

router.get(
  "/token/:token",
  getByTokenValidations,
  validationMiddleware,
  getByToken
);

router.put("/:id", deleteByIdValidations, validationMiddleware, updateById);

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

router.delete(
  "/token/:token",
  deleteByTokenValidation,
  validationMiddleware,
  deleteByToken
);

export default router;
