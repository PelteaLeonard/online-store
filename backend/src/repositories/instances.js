import RoleRepository from "./role-repository.js";
import UserRepository from "./user-repository.js";
import BookRepository from "./book-repository.js";
import AuthorRepository from "./author-repository.js";
import ReviewRepository from "./review-repository.js";
import CategoryRepository from "./category-repository.js";
import PendingClientRepository from "./pending-client-repository.js";

import { prismaClient } from "../../prisma/client.js";

export const roleRepository = new RoleRepository(prismaClient);
export const userRepository = new UserRepository(prismaClient);
export const bookRepository = new BookRepository(prismaClient);
export const authorRepository = new AuthorRepository(prismaClient);
export const reviewRepository = new ReviewRepository(prismaClient);
export const categoryRepository = new CategoryRepository(prismaClient);
export const pendingClientRepository = new PendingClientRepository(prismaClient);
