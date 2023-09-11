import RoleController from "../controllers/role-controller.js";
import validationMiddleware from "../middlewares/validation-middleware.js";

import { Router } from "express";
import { roleService } from "../services/instances.js";

import {
  createValidations,
  getByIdValidations,
  getByNameValidations,
  updateByIdValidations,
  deleteByIdValidations,
  deleteByNameValidations,
} from "../validations/role-validations.js";

const router = Router();

const roleController = new RoleController(roleService);

const {
  create,
  getAll,
  getById,
  getByName,
  deleteAll,
  updateById,
  deleteById,
  deleteByName,
} = roleController;

router.post("", createValidations, validationMiddleware, create);

router.get("", getAll);

router.get("/:id", getByIdValidations, validationMiddleware, getById);

router.get(
  "/name/:name",
  getByNameValidations,
  validationMiddleware,
  getByName
);

router.put("/:id", updateByIdValidations, validationMiddleware, updateById);

router.delete("", deleteAll);

router.delete("/:id", deleteByIdValidations, validationMiddleware, deleteById);

router.delete(
  "/name/:name",
  deleteByNameValidations,
  validationMiddleware,
  deleteByName
);

export default router;
