class CategoryRepository {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  async create(data) {
    return await this.prismaClient.category.create({
      data,
    });
  }

  async getAll() {
    return await this.prismaClient.category.findMany();
  }

  async getById(id) {
    return await this.prismaClient.category.findUnique({
      where: {
        id,
      },
    });
  }

  async getByName(name) {
    return await this.prismaClient.category.findUnique({
      where: {
        name,
      },
    });
  }

  async updateById(id, data) {
    return await this.prismaClient.category.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteAll() {
    const { count } = await this.prismaClient.category.deleteMany();
    return count;
  }

  async deleteById(id) {
    return await this.prismaClient.category.delete({
      where: {
        id,
      },
    });
  }

  async deleteByName(name) {
    return await this.prismaClient.category.delete({
      where: {
        name,
      },
    });
  }
}

export default CategoryRepository;
