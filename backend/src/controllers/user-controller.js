import asyncHandler from "express-async-handler";

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  create = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const user = await this.userService.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.json({
      user,
      message: `The user ${user.firstName} ${user.lastName} has been created successfully!`,
      severity: "success",
    });
  });

  getAll = asyncHandler(async (_req, res) => {
    const user = await this.userService.getAll();
    res.json(user);
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const users = await this.userService.getById(id);
    res.json(users);
  });

  getByFirstName = asyncHandler(async (req, res) => {
    const { firstName } = req.params;
    const users = await this.userService.getByFirstName(firstName);
    res.json(users);
  });

  getByLastName = asyncHandler(async (req, res) => {
    const { lastName } = req.params;
    const users = await this.userService.getByLastName(lastName);
    res.json(users);
  });

  getByEmail = asyncHandler(async (req, res) => {
    const { email } = req.params;
    const users = await this.userService.getByEmail(email);
    res.json(users);
  });

  updateById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const user = await this.userService.updateById(id, {
      firstName,
      lastName,
      email,
      password,
    });
    res.json({
      message: `The user with name ${user.firstName} ${user.lastName} has been updated!`,
      severity: "success",
    });
  });

  deleteAll = asyncHandler(async (_req, res) => {
    const count = await this.userService.deleteAll();
    res.json({
      message: `A number of ${count} users has been deleted!`,
      severity: "success",
    });
  });

  deleteById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await this.userService.deleteById(id);
    res.json({
      message: `The user ${user.firstName} ${user.lastName}  has been deleted successfully!`,
      severity: "success",
    });
  });

  deleteByFirstName = asyncHandler(async (req, res) => {
    const { firstName } = req.params;
    const count = await this.userService.deleteByFirstName(firstName);
    res.json({
      message: `A number of ${count} users with first name ${firstName} have been deleted!!`,
      severity: "success",
    });
  });

  deleteByLastName = asyncHandler(async (req, res) => {
    const { lastName } = req.params;
    const count = await this.userService.deleteByLastName(lastName);
    res.json({
      message: `A number of ${count} users with first name ${lastName} have been deleted!!`,
      severity: "success",
    });
  });

  deleteByEmail = asyncHandler(async (req, res) => {
    const { email } = req.params;
    const user = await this.userService.deleteByEmail(email);
    res.json({
      message: `A user with email ${user.email}  has been deleted!`,
      severity: "success",
    });
  });
}

export default UserController;
