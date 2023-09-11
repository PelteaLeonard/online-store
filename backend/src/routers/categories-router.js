import CategoryController from "../controllers/category-controller.js";
import validationMiddleware from "../middlewares/validation-middleware.js";

import { Router } from "express";
import { categoryService } from "../services/instances.js";

import {
  createValidations,
  getByIdValidations,
  getByNameValidations,
  updateByIdValidations,
  deleteByIdValidations,
  deleteByNameValidations,
} from "../validations/category-validations.js";

const router = Router();

const categoryController = new CategoryController(categoryService);

const {
  getAll,
  create,
  getById,
  deleteAll,
  getByName,
  updateById,
  deleteById,
  deleteByName,
} = categoryController;

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
