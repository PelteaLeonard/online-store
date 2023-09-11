class UserRepository {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  async create(data) {
    return await this.prismaClient.user.create({
      data,
    });
  }

  async getAll() {
    return await this.prismaClient.user.findMany();
  }

  async getById(id) {
    return await this.prismaClient.user.findUnique({
      where: {
        id,
      },
    });
  }

  async getByFirstName(firstName) {
    return await this.prismaClient.user.findMany({
      where: {
        firstName: {
          contains: firstName,
        },
      },
    });
  }

  async getByLastName(lastName) {
    return await this.prismaClient.user.findMany({
      where: {
        lastName,
      },
    });
  }

  async getByEmail(email) {
    return await this.prismaClient.user.findUnique({
      where: {
        email,
      },
    });
  }

  async updateById(id, data) {
    return await this.prismaClient.user.update({
      where: { id },
      data,
    });
  }

  async deleteAll() {
    const { count } = await this.prismaClient.user.deleteMany();
    return count;
  }

  async deleteById(id) {
    return await this.prismaClient.user.delete({
      where: {
        id,
      },
    });
  }

  async deleteByFirstName(firstName) {
    const { count } = await this.prismaClient.user.deleteMany({
      where: {
        firstName: {
          contains: firstName,
        },
      },
    });
    return count;
  }

  async deleteByLastName(lastName) {
    const { count } = await this.prismaClient.user.deleteMany({
      where: {
        lastName,
      },
    });
    return count;
  }

  async deleteByEmail(email) {
    return await this.prismaClient.user.delete({
      where: {
        email,
      },
    });
  }
}

export default UserRepository;
