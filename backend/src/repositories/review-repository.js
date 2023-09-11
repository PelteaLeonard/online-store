class ReviewRepository {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  async create(data) {
    return await this.prismaClient.review.create({
      data,
    });
  }

  async getAll() {
    return await this.prismaClient.review.findMany();
  }

  async getById(id) {
    return await this.prismaClient.review.findUnique({
      where: {
        id,
      },
    });
  }

  async getByBookName(_book, name) {
    return await this.prismaClient.review.findMany({
      where: {
        book: {
          name: {
            contains: name,
          },
        },
      },
    });
  }

  async getByUserEmail(_user, email) {
    return await this.prismaClient.review.findMany({
      where: {
        user: {
          email,
        },
      },
    });
  }

  async getByTitle(title) {
    return await this.prismaClient.review.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    });
  }

  async getByText(text) {
    return await this.prismaClient.review.findMany({
      where: {
        text: {
          contains: text,
        },
      },
    });
  }

  async getByRating(rating) {
    return await this.prismaClient.review.findMany({
      where: {
        rating: parseInt(rating),
      },
    });
  }

  async updateById(id) {
    return await this.prismaClient.review.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteAll() {
    const { count } = this.prismaClient.review.deleteMany();
    return count;
  }

  async deleteById(id) {
    return await this.prismaClient.review.delete({
      where: {
        id,
      },
    });
  }

  async deleteByBookName(_book, name) {
    return await this.prismaClient.review.delete({
      where: {
        book: {
          name: {
            contains: name,
          },
        },
      },
    });
  }

  async deleteByUserEmail(_user, email) {
    return await this.prismaClient.review.delete({
      where: {
        user: {
          email,
        },
      },
    });
  }

  async deleteByTitle(title) {
    return await this.prismaClient.review.delete({
      where: {
        title,
      },
    });
  }

  async deleteByText(text) {
    return await this.prismaClient.review.delete({
      where: {
        text,
      },
    });
  }

  async deleteByRating(rating) {
    return await this.prismaClient.review.delete({
      where: {
        rating: parseInt(rating),
      },
    });
  }

  
}

export default ReviewRepository;
