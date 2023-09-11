import e from "express";
import NotFoundException from "../exceptions/not-found-exception.js";

class PendingClientService {
  constructor(pendingClientRepository) {
    this.pendingClientRepository = pendingClientRepository;
  }

  async create(data) {
    return this.pendingClientRepository.create(data);
  }

  async getAll() {
    return this.pendingClientRepository.getAll();
  }

  async getById(id) {
    return this.pendingClientRepository.getById(id);
  }

  async getByFirstName(firstName) {
    return this.pendingClientRepository.getByFirstName(firstName);
  }

  async getByLastName(lastName) {
    return this.pendingClientRepository.getByLastName(lastName);
  }

  async getByEmail(email) {
    return this.pendingClientRepository.getByEmail(email);
  }

  async getByToken(token) {
    return this.pendingClientRepository.getByToken(token);
  }

  async updateById(id, data) {
    return this.pendingClientRepository.updateById(id, data);
  }

  async deleteAll() {
    return this.pendingClientRepository.deleteAll();
  }

  async deleteById(id) {
    return this.pendingClientRepository.deleteById(id);
  }

  async deleteByFirstName(firstName) {
    return this.pendingClientRepository.deleteByFirstName(firstName);
  }

  async deleteByLastName(lastName) {
    return this.pendingClientRepository.deleteByLastName(lastName);
  }

  async deleteByEmail(email) {
    const pendingClient = await this.getByEmail(email);

    if (!pendingClient) {
      throw new NotFoundException(
        `There is no pending client with email ${email}!`
      );
    }

    return this.pendingClientRepository.deleteByEmail(email);
  }

  async deleteByToken(token) {
    return this.pendingClientRepository.deleteByToken(token);
  }
}

export default PendingClientService;
