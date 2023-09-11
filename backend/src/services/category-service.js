import NotFoundException from "../exceptions/not-found-exception.js";

class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async create(data) {
    return this.categoryRepository.create(data);
  }

  async getAll() {
    return this.categoryRepository.getAll();
  }

  async getById(id) {
    const category = await this.categoryRepository.getById(id);

    if (!category) {
      throw new NotFoundException(`There is no category with id ${id}!`);
    }

    return this.categoryRepository.getById(id);
  }

  async getByName(name) {
    const category = await this.categoryRepository.getByName(name);

    if (!category) {
      throw new NotFoundException(`There is no category with name ${name}!`);
    }

    return this.categoryRepository.getByName(name);
  }

  async updateById(id, data) {
    const category = await this.getById(id);

    if (!category) {
      throw new NotFoundException(`There is no category with id ${id}!`);
    }

    return this.categoryRepository.updateById(id, data);
  }

  async deleteAll() {
    return this.categoryRepository.deleteAll();
  }

  async deleteById(id) {
    const category = await this.getById(id);

    console.log(category);

    if (!category) {
      throw new NotFoundException(`There is no category with id ${id}!`);
    }

    return this.categoryRepository.deleteById(id);
  }

  async deleteByName(name) {
    const category = await this.getByName(name);

    if (!category) {
      throw new NotFoundException(`There is no category with name ${name}!`);
    }

    return this.categoryRepository.deleteByName(name);
  }
}

export default CategoryService;
