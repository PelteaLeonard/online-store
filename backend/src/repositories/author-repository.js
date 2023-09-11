class AuthorRepository {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  async create(data) {
    return await this.prismaClient.author.create({
      data,
    });
  }

  async getFirst(data) {
    return await this.prismaClient.author.findFirst({ where: data });
  }

  async getOrCreate(data) {
    return this.getFirst(data) || this.create(data);
  }

  async getAll() {
    return await this.prismaClient.author.findMany();
  }

  async getById(id) {
    return await this.prismaClient.author.findUnique({
      where: {
        id,
      },
    });
  }

  async getByFirstName(firstName) {
    return await this.prismaClient.author.findMany({
      where: {
        firstName: {
          contains: firstName,
        },
      },
    });
  }

  async getByLastName(lastName) {
    return await this.prismaClient.author.findMany({
      where: {
        lastName,
      },
    });
  }

  async getByDescription(description) {
    return await this.prismaClient.author.findMany({
      where: {
        description: {
          contains: description,
        },
      },
    });
  }

  async updateById(id, data) {
    return await this.prismaClient.author.update({
      where: { id },
      data,
    });
  }

  async deleteAll() {
    const { count } = await this.prismaClient.author.deleteMany();
    return count;
  }

  async deleteById(id) {
    return await this.prismaClient.author.delete({
      where: {
        id,
      },
    });
  }

  async deleteByFirstName(firstName) {
    const { count } = await this.prismaClient.author.deleteMany({
      where: {
        firstName,
      },
    });
    return count;
  }

  async deleteByLastName(lastName) {
    const { count } = await this.prismaClient.author.deleteMany({
      where: {
        lastName,
      },
    });
    return count;
  }

  async deleteByDescription(description) {
    const { count } = await this.prismaClient.author.deleteMany({
      where: {
        description: {
          contains: description,
        },
      },
    });
    return count;
  }
}
export default AuthorRepository;
