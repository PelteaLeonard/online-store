class RoleRepository {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  async create(data) {
    return await this.prismaClient.role.create({
      data,
    });
  }

  async getAll() {
    return await this.prismaClient.role.findMany();
  }

  async getById(id) {
    return await this.prismaClient.role.findUnique({
      where: {
        id,
      },
    });
  }

  async getByName(name) {
    return await this.prismaClient.role.findMany({
      where: {
        name,
      },
    });
  }

  async updateById(id, data) {
    return await this.prismaClient.role.update({
      where: { id },
      data,
    });
  }

  async deleteAll() {
    const { count } = await this.prismaClient.role.deleteMany();
    return count;
  }

  async deleteById(id) {
    return await this.prismaClient.role.delete({
      where: {
        id,
      },
    });
  }

  async deleteByName(name) {
    return await this.prismaClient.role.delete({
      where: {
        name,
      },
    });
  }
}

export default RoleRepository;
