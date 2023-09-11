import asyncHandler from "express-async-handler";

class ReviewController {
  constructor(reviewService) {
    this.reviewService = reviewService;
  }

  create = asyncHandler(async (req, res) => {
    const { bookName, userEmail, title, text, rating } = req.body;
    const reviews = await this.reviewService.create({
      bookName,
      userEmail,
      title,
      text,
      rating,
    });
    res.json(reviews);
  });

  getAll = asyncHandler(async (_req, res) => {
    const reviews = await this.reviewService.getAll();
    res.json(reviews);
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reviews = await this.reviewService.getById(id);
    res.json(reviews);
  });

  getByBookName = asyncHandler(async (req, res) => {
    const { bookName } = req.body;
    const reviews = await this.reviewService.getByBookName(bookName);
    res.json(reviews);
  });

  getByUserEmail = asyncHandler(async (req, res) => {
    const { userEmail } = req.body;
    const reviews = await this.reviewService.getByUserEmail(userEmail);
    res.json(reviews);
  });

  getByTitle = asyncHandler(async (req, res) => {
    const { title } = req.body;
    const reviews = await this.reviewService.getByTitle(title);
    res.json(reviews);
  });

  getByText = asyncHandler(async (req, res) => {
    const { text } = req.body;
    const reviews = await this.reviewService.getByText(text);
    res.json(reviews);
  });

  getByRating = asyncHandler(async (req, res) => {
    const { rating } = req.body;
    const reviews = await this.reviewService.getByRating(rating);
    res.json(reviews);
  });

  updateById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { bookName, userEmail, title, text, rating } = req.body;
    const reviews = await this.reviewService.updateById(id, {
      bookName,
      userEmail,
      title,
      text,
      rating,
    });
    res.json(reviews);
  });

  deleteAll = asyncHandler(async (_req, res) => {
    const count = await this.reviewService.deleteAll();
    res.json(`A number of ${count} reviews has been deleted!`);
  });

  deleteById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reviews = await this.reviewService.deleteById(id);
    res.json(reviews);
  });

  deleteByBookName = asyncHandler(async (req, res) => {
    const { bookName } = req.params;
    const reviews = await this.reviewService.deleteByBookName(bookName);
    res.json(reviews);
  });

  deleteByUserEmail = asyncHandler(async (req, res) => {
    const { userEmail } = req.params;
    const reviews = await this.reviewService.deleteByUserEmail(userEmail);
    res.json(reviews);
  });

  deleteByTitle = asyncHandler(async (req, res) => {
    const { title } = req.params;
    const reviews = await this.reviewService.deleteByTitle(title);
    res.json(reviews);
  });

  deleteByText = asyncHandler(async (req, res) => {
    const { text } = req.params;
    const reviews = await this.reviewService.deleteByText(text);
    res.json(reviews);
  });

  deleteByRating = asyncHandler(async (req, res) => {
    const { rating } = req.params;
    const reviews = await this.reviewService.deleteByRating(rating);
    res.json(reviews);
  });
}
export default ReviewController;
