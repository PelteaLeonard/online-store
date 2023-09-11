class BookRepository {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  async create(data) {
    return await this.prismaClient.book.create({
      data,
    });
  }

  async getAll() {
    return await this.prismaClient.book.findMany();
  }

  async getById(id) {
    return await this.prismaClient.book.findUnique({
      where: {
        id,
      },
    });
  }

  async getByName(name) {
    return await this.prismaClient.book.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });
  }

  async getByCategory(category) {
    return await this.prismaClient.book.findMany({
      where: {
        category: {
          name: {
            contains: category,
            mode: "insensitive",
          },
        },
      },
    });
  }

  async getByDescription(description) {
    return await this.prismaClient.book.findMany({
      where: {
        description: {
          contains: description,
          mode: "insensitive",
        },
      },
    });
  }

  async updateById(id, data) {
    return await this.prismaClient.book.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteAll() {
    const { count } = await this.prismaClient.book.deleteMany();
    return count;
  }

  async deleteById(id) {
    return await this.prismaClient.book.delete({
      where: {
        id,
      },
    });
  }

  async deleteByName(name) {
    return await this.prismaClient.book.delete({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }

  async deleteByCategory(category) {
    return await this.prismaClient.book.delete({
      where: {
        category: {
          name: {
            contains: category,
          },
        },
      },
    });
  }

  async deleteByDescription(description) {
    return await this.prismaClient.book.delete({
      where: {
        description: {
          contains: description,
        },
      },
    });
  }
}

export default BookRepository;
