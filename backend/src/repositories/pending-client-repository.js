class PendingClientRepository {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  async create(data) {
    return await this.prismaClient.pendingClient.create({
      data,
    });
  }

  async getAll() {
    return await this.prismaClient.pendingClient.findMany();
  }

  async getById(id) {
    return await this.prismaClient.pendingClient.findUnique({
      where: {
        id,
      },
    });
  }

  async getByFirstName(firstName) {
    return await this.prismaClient.pendingClient.findMany({
      where: {
        firstName: {
          contains: firstName,
        },
      },
    });
  }

  async getByLastName(lastName) {
    return await this.prismaClient.pendingClient.findMany({
      where: {
        lastName,
      },
    });
  }

  async getByEmail(email) {
    return await this.prismaClient.pendingClient.findUnique({
      where: {
        email,
      },
    });
  }

  async getByToken(token) {
    return await this.prismaClient.pendingClient.findUnique({
      where: {
        token,
      },
    });
  }

  async updateById(id, data) {
    return await this.prismaClient.pendingClient.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteAll() {
    const { count } = await this.prismaClient.pendingClient.deleteMany();
    return count;
  }

  async deleteById(id) {
    return await this.prismaClient.pendingClient.delete({
      where: {
        id,
      },
    });
  }

  async deleteByFirstName(firstName) {
    const { count } = await this.prismaClient.pendingClient.deleteMany({
      where: {
        firstName: {
          contains: firstName,
        },
      },
    });
    return count;
  }

  async deleteByLastName(lastName) {
    const { count } = await this.prismaClient.pendingClient.deleteMany({
      where: {
        lastName,
      },
    });
    return count;
  }

  async deleteByEmail(email) {
    return await this.prismaClient.pendingClient.delete({
      where: {
        email,
      },
    });
  }

  async deleteByToken(token) {
    return await this.prismaClient.pendingClient.delete({
      where: {
        token,
      },
    });
  }
}

export default PendingClientRepository;
