class ReviewService {
  constructor(reviewService) {
    this.reviewService = reviewService;
  }

  async create(data) {
    return this.reviewService.create(data);
  }

  async getAll() {
    return this.reviewService.getAll();
  }

  async getById(id) {
    return this.reviewService.getById();
  }

  async getByBookName(book, name) {
    return this.reviewService.getByBookName(book, name);
  }

  async getByUserEmail(user, email) {
    return this.reviewService.getByUserEmail(user, email);
  }

  async getByTitle(title) {
    return this.reviewService.getByTitle(title);
  }

  async getByText(text) {
    return this.reviewService.getByText(text);
  }

  async getByRating(rating) {
    return this.reviewService.getByRating(rating);
  }

  async updateById(id) {
    return this.reviewService.updateById(id);
  }

  async deleteAll() {
    return this.reviewService.deleteAll();
  }

  async deleteById(id) {
    return this.reviewService.deleteById(id);
  }

  async deleteByBookName(book, name) {
    return this.reviewService.deleteByBookName(book, name);
  }

  async deleteByUserEmail(user, email) {
    return this.reviewService.deleteByUserEmail(user, email);
  }

  async deleteByTitle(title) {
    return this.reviewService.deleteByTitle(title);
  }

  async deleteByText(text) {
    return this.reviewService.deleteByText(text);
  }

  async deleteByRating(rating) {
    return this.reviewService.deleteByRating(rating);
  }
}

export default ReviewService;
