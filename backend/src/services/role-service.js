import NotFoundException from "../exceptions/not-found-exception.js";

class RoleService {
  constructor(roleRepository) {
    this.roleRepository = roleRepository;
  }

  async create(data) {
    return this.roleRepository.create(data);
  }

  async getAll() {
    return this.roleRepository.getAll();
  }

  async getById(id) {
    const role = await this.roleRepository.getById(id);

    if (!role) {
      throw new NotFoundException(`There is no role with id ${id}!`);
    }

    return this.roleRepository.getById(id);
  }

  async getByName(name) {
    const role = await this.roleRepository.getByName(name);

    if (!role) {
      throw new NotFoundException(`There is no role with name ${name}!`);
    }

    return this.roleRepository.getByName(name);
  }

  async updateById(id, data) {
    const role = await this.getById(id);

    if (!category) {
      throw new NotFoundException(`There is no role with id ${id}!`);
    }

    return this.roleRepository.updateById(id, data);
  }

  async deleteAll() {
    return this.roleRepository.deleteAll();
  }

  async deleteById(id) {
    const role = await this.getById(id);

    if (!role) {
      throw new NotFoundException(`There is no role with id ${id}!`);
    }

    return this.roleRepository.deleteById(id);
  }

  async deleteByName(name) {
    const role = await this.getByName(name);

    if (!role) {
      throw new NotFoundException(`There is no role with name ${name}!`);
    }

    return this.roleRepository.deleteByName(name);
  }
}

export default RoleService;
