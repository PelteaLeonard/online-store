import RoleService from "./role-service.js";
import UserService from "./user-service.js";
import BookService from "./book-service.js";
import AuthorService from "./author-service.js";
import ReviewService from "./review-service.js";
import CategoryService from "./category-service.js";
import PendingClientService from "./pending-client-service.js";

import {
  roleRepository,
  userRepository,
  bookRepository,
  authorRepository,
  reviewRepository,
  categoryRepository,
  pendingClientRepository
} from "../repositories/instances.js";

export const roleService = new RoleService(roleRepository);
export const userService = new UserService(userRepository);
export const bookService = new BookService(bookRepository);
export const authorService = new AuthorService(authorRepository);
export const reviewService = new ReviewService(reviewRepository);
export const categoryService = new CategoryService(categoryRepository);
export const pendingClientService = new PendingClientService(pendingClientRepository);
