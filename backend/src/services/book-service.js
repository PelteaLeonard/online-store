class BookService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async create(data) {
    return this.bookRepository.create(data);
  }

  async getAll() {
    return this.bookRepository.getAll();
  }

  async getById(id) {
    return this.bookRepository.getById(id);
  }

  async getByName(name) {
    return this.bookRepository.getByName(name);
  }

  async getByCategory(category) {
    return this.bookRepository.getBYCategory(category);
  }

  async getByDescription(description) {
    return this.bookRepository.getByDescription(description);
  }

  async updateById(id, data) {
    return this.bookRepository.updateById(id, data);
  }

  async deleteAll() {
    return this.bookRepository.deleteAll();
  }

  async deleteById(id) {
    return this.bookRepository.deleteById(id);
  }

  async deleteByName(name) {
    return this.bookRepository.deleteByName(name);
  }

  async deleteByCategory(category) {
    return this.bookRepository.deleteByCategory(category);
  }

  async deleteByDescription(description) {
    return this.bookRepository.deleteByDescription(description);
  }
}

export default BookService;
