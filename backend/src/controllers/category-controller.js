import asyncHandler from "express-async-handler";

class CategoryController {
  constructor(categoryService) {
    this.categoryService = categoryService;
  }

  getAll = asyncHandler(async (_req, res) => {
    const categories = await this.categoryService.getAll();
    res.json(categories);
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await this.categoryService.getById(id);
    res.json(category);
  });

  getByName = asyncHandler(async (req, res) => {
    const { name } = req.params;
    const category = await this.categoryService.getByName(name);
    res.json(category);
  });

  create = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const category = await this.categoryService.create({ name });
    res.json({
      category,
      message: `The category ${category.name} has been created successfully!`,
      severity: "success",
    });
  });

  deleteAll = asyncHandler(async (_req, res) => {
    const count = await this.categoryService.deleteAll();
    res.json({
      message: `A number of ${count} categories has been deleted!`,
      severity: "success",
    });
  });

  deleteById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await this.categoryService.deleteById(id);
    res.json({
      message: `The category ${category.name} has been deleted successfully!`,
      severity: "success",
    });
  });

  deleteByName = asyncHandler(async (req, res) => {
    const { name } = req.params;
    const category = await this.categoryService.deleteByName(name);
    res.json({
      message: `The category ${category.name} hes been deleted successfully!`,
      severity: "success",
    });
  });

  updateById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const category = await this.categoryService.updateById(id, { name });
    res.json({
      message: `The category with name ${category.name} has been updated!`,
      severity: "success",
    });
  });
}

export default CategoryController;
