import asyncHandler from "express-async-handler";

class AuthorController {
  constructor(authorService) {
    this.authorService = authorService;
  }

  getAll = asyncHandler(async (_req, res) => {
    const author = await this.authorService.getAll();
    res.json(author);
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const author = await this.authorService.getById(id);
    res.json(author);
  });

  getByFirstName = asyncHandler(async (req, res) => {
    const { firstName } = req.params;
    const authors = await this.authorService.getByFirstName(firstName);
    res.json(authors);
  });

  getByLastName = asyncHandler(async (req, res) => {
    const { lastName } = req.params;
    const authors = await this.authorService.getByLastName(lastName);
    res.json(authors);
  });

  getByDescription = asyncHandler(async (req, res) => {
    const { description } = req.params;
    const authors = await this.authorService.getByDescription(description);
    res.json(authors);
  });

  create = asyncHandler(async (req, res) => {
    const { firstName, lastName, description } = req.body;
    const author = await this.authorService.create({
      firstName,
      lastName,
      description,
    });
    res.json({
      author,
      message: `The author ${author.firstName} ${author.lastName} has been created successfully!`,
      severity: "success",
    });
  });

  deleteAll = asyncHandler(async (_req, res) => {
    const count = await this.authorService.deleteAll();
    res.json({
      message: `A number of ${count} authors has been deleted!`,
      severity: "success",
    });
  });

  deleteById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const author = await this.authorService.deleteById(id);
    res.json({
      message: `The author ${author.firstName} ${author.lastName}  has been deleted successfully!`,
      severity: "success",
    });
  });

  deleteByFirstName = asyncHandler(async (req, res) => {
    const { firstName } = req.params;
    const count = await this.authorService.deleteByFirstName(firstName);
    res.json({
      message: `A number of ${count} authors with first name ${firstName} have been deleted!!`,
      severity: "success",
    });
  });

  deleteByLastName = asyncHandler(async (req, res) => {
    const { lastName } = req.params;
    const count = await this.authorService.deleteByLastName(lastName);
    res.json({
      message: `A number of ${count} authors with last name ${lastName} have been deleted!`,
      severity: "success",
    });
  });

  deleteByDescription = asyncHandler(async (req, res) => {
    const { description } = req.params;
    const count = await this.authorService.deleteByDescription(description);
    res.json({
      message: `A number of ${count} authors containing description ${description} have been deleted!`,
      severity: "success",
    });
  });

  updateById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, description } = req.body;
    const author = await this.authorService.updateById(id, {
      firstName,
      lastName,
      description,
    });
    res.json({
      message: `The author with name ${author.firstName} ${author.lastName} has been updated!`,
      severity: "success",
    });
  });
}

export default AuthorController;
