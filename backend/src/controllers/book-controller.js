import asyncHandler from "express-async-handler";

class BookController {
  constructor(bookService) {
    this.bookService = bookService;
  }

  create = asyncHandler(async (req, res) => {
    const { name, description, category } = req.body;
    const books = await this.bookService.create({
      name,
      description,
      category,
    });
    res.json(books);
  });

  getAll = asyncHandler(async (_req, res) => {
    const books = await this.bookService.getAll();
    res.json(books);
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const books = await this.bookService.getById(id);
    res.json(books);
  });

  getByName = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const books = await this.bookService.getByName(name);
    res.json(books);
  });

  getByDescription = asyncHandler(async (req, res) => {
    const { description } = req.body;
    const books = await this.bookService.getByDescription(description);
    res.json(books);
  });

  getByCategory = asyncHandler(async (req, res) => {
    const { category } = req.body;
    const books = await this.bookService.getByCategoryId(category);
    res.json(books);
  });

  updateById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, description, category } = req.body;
    const books = await this.bookService.updateById(id, {
      name,
      description,
      category,
    });
    res.json(books);
  });

  deleteAll = asyncHandler(async (_req, res) => {
    const count = await this.bookService.deleteAll();
    res.json(`A number of ${count} books has been deleted!`);
  });

  deleteById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const books = await this.bookService.deleteById(id);
    res.json(books);
  });

  deleteByName = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const books = await this.bookService.deleteByName(name);
    res.json(books);
  });

  deleteByDescription = asyncHandler(async (req, res) => {
    const { description } = req.body;
    const books = await this.bookService.deleteByDescription(description);
    res.json(books);
  });

  deleteByCategory = asyncHandler(async (req, res) => {
    const { category } = req.body;
    const books = await this.bookService.deleteByCategoryId(category);
    res.json(books);
  });
}

export default BookController;
