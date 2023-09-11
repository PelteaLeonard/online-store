class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create(data) {
    return this.userRepository.create(data);
  }

  async getAll() {
    return this.userRepository.getAll();
  }

  async getById(id) {
    return this.userRepository.getById(id);
  }

  async getByFirstName(firstName) {
    return this.userRepository.getByFirstName(firstName);
  }

  async getByLastName(lastName) {
    return this.userRepository.getByLastName(lastName);
  }

  async getByEmail(email) {
    return this.userRepository.getByEmail(email);
  }

  async updateById(id, data) {
    return this.userRepository.updateById(id, data);
  }

  async deleteAll() {
    return this.userRepository.deleteAll();
  }

  async deleteById(id) {
    return this.userRepository.deleteById(id);
  }

  async deleteByFirstName(firstName) {
    return this.userRepository.deleteByFirstName(firstName);
  }

  async deleteByLastName(lastName) {
    return this.userRepository.deleteByLastName(lastName);
  }

  async deleteByEmail(email) {
    return this.userRepository.deleteByEmail(email);
  }
}

export default UserService;
