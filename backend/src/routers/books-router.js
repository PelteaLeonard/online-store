import asyncHandler from "express-async-handler";

import { Router } from "express";
import { prismaClient } from "../../prisma/client.js";
import ConflictException from "../exceptions/conflict-exception.js";

const router = Router();

router.post(
  "",
  asyncHandler(async function (req, res) {
    const { name, description, price, categoryId } = req.body;

    const book = await prismaClient.book.findUnique({
      where: {
        name,
      },
    });

    if (book) {
      throw new ConflictException(`There is a book with the name ${name}!`);
    }

    await prismaClient.book.create({
      data: {
        name: name,
        description: description,
        price: price,
        categoryId: bookCategory.id,
      },
    });

    res.send(`The book ${name} has been added successfully!`);
  })
);

router.get(
  "",
  asyncHandler(async function (_req, res) {
    const books = await prismaClient.book.findMany();
    res.json(books);
  })
);

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const book = await prismaClient.book.findUnique({
      where: {
        id: id,
      },
    });
    res.json(book);
  })
);

router.get(
  "/name/:name",
  asyncHandler(async function (req, res) {
    const { name } = req.params;
    const books = await prismaClient.book.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
    res.json(books);
  })
);

router.get(
  "/category/:category",
  asyncHandler(async function (req, res) {
    const { category } = req.params;
    const books = await prismaClient.book.findMany({
      where: {
        category: {
          name: {
            contains: category,
          },
        },
      },
    });
    res.json(books);
  })
);

router.get(
  "/description/:description",
  asyncHandler(async function (req, res) {
    const { description } = req.params;
    const books = await prismaClient.book.findMany({
      where: {
        description: {
          contains: description,
        },
      },
    });
    res.json(books);
  })
);

router.put(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const { name, description, price, category } = req.body;

    const updateData = {};

    name && (updateData.name = name);
    description && (updateData.description = description);
    price && (updateData.price = price);
    category && (updateData.category = category);

    await prismaClient.book.update({
      where: {
        id: id,
      },
      data: updateData,
    });

    res.send(`Book with id ${id} has been updated successfully!`);
  })
);

router.delete(
  "",
  asyncHandler(async function (_req, res) {
    await prismaClient.book.deleteMany();
    res.send("All books has been deleted successfully!");
  })
);

router.delete(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;

    await prismaClient.book.delete({
      where: {
        id: id,
      },
    });

    res.send(`Book with id ${id} has been deleted successfully!`);
  })
);

export default router;
