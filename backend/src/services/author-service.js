import NotFoundException from "../exceptions/not-found-exception.js";

class AuthorService {
  constructor(authorRepository) {
    this.authorRepository = authorRepository;
  }

  async create(data) {
    return this.authorRepository.create(data);
  }

  async getFirst(data) {
    return this.authorRepository.findFirst(data);
  }

  async getOrCreate(data) {
    return this.authorRepository.getOrCreate(data);
  }

  async getAll() {
    return this.authorRepository.getAll();
  }

  async getById(id) {
    const author = await this.authorRepository.getById(id);

    if (!author) {
      throw new NotFoundException(`There is no author with id ${id}!`);
    }

    return this.authorRepository.getById(id);
  }

  async getByFirstName(firstName) {
    return this.authorRepository.getByFirstName(firstName);
  }

  async getByLastName(lastName) {
    return this.authorRepository.getByLastName(lastName);
  }

  async getByDescription(description) {
    return this.authorRepository.getByDescription(description);
  }

  async updateById(id, data) {
    return this.authorRepository.updateById(id, data);
  }

  async deleteAll() {
    return this.authorRepository.deleteAll();
  }

  async deleteById(id) {
    return this.authorRepository.deleteById(id);
  }

  async deleteByFirstName(firstName) {
    return this.authorRepository.deleteByFirstName(firstName);
  }

  async deleteByLastName(lastName) {
    return this.authorRepository.deleteByLastName(lastName);
  }

  async deleteByDescription(description) {
    return this.authorRepository.deleteByDescription(description);
  }
}

export default AuthorService;
