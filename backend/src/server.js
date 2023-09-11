import cors from "cors";
import express from "express";

import errorMiddleware from "./middlewares/error-middleware.js";

import usersRouter from "./routers/users-router.js";
import booksRouter from "./routers/books-router.js";
import rolesRouter from "./routers/roles-router.js";
import authorsRouter from "./routers/authors-router.js";
import reviewsRouter from "./routers/reviews-router.js";
import categoriesRouter from "./routers/categories-router.js";
import pendingClientRouter from "./routers/pending-client-router.js";
import authenticationRouter from "./routers/authentication-router.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/auth", authenticationRouter);
app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/roles", rolesRouter);
app.use("/api/authors", authorsRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/pending-client", pendingClientRouter);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));
