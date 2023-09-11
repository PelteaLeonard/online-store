import asyncHandler from "express-async-handler";

class RoleController {
  constructor(roleService) {
    this.roleService = roleService;
  }

  create = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const role = await this.roleService.create({ name });
    res.json({
      role,
      message: `The role ${role.name} has been created successfully!`,
      severity: "success",
    });
  });

  getAll = asyncHandler(async (_req, res) => {
    const role = await this.roleService.getAll();
    res.json(role);
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const role = await this.roleService.getById(id);
    res.json(role);
  });

  getByName = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const role = await this.roleService.getByName(name);
    res.json(role);
  });

  updateById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const role = await this.roleService.updateById(id, { name });
    res.json({
      message: `The role with name ${role.name} has been updated!`,
      severity: "success",
    });
  });

  deleteAll = asyncHandler(async (_req, res) => {
    const count = await this.roleService.deleteAll();
    res.json({
      message: `A number of ${count} roles has been deleted!`,
      severity: "success",
    });
  });

  deleteById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const role = await this.roleService.deleteById(id);
    res.json({
      message: `The role ${role.name} has been deleted successfully!`,
      severity: "success",
    });
  });

  deleteByName = asyncHandler(async (req, res) => {
    const { name } = req.params;
    const role = await this.roleService.deleteByName(name);
    res.json({
      message: `The role ${role.name} has been deleted successfully!`,
      severity: "success",
    });
  });
}

export default RoleController;
