import asyncHandler from "express-async-handler";

import { Router } from "express";
import { prismaClient } from "../../prisma/client.js";

const router = Router();

router.post(
  "",
  asyncHandler(async function (req, res) {
    const { idBook, idUser, title, text, rating } = req.body;

    await prismaClient.review.create({
      data: {
        text: text,
        title: title,
        idBook: idBook,
        idUser: idUser,
        rating: parseInt(rating),
      },
    });

    res.status(201).json({
      message: "Review has been added successfully",
      severity: "success",
    });
  })
);

router.get(
  "/book/name/:name",
  asyncHandler(async function (req, res) {
    const { name } = req.params;
    const reviews = await prismaClient.review.findMany({
      where: {
        book: {
          name: {
            contains: name,
          },
        },
      },
    });
    res.json(reviews);
  })
);

router.get(
  "/user/email/:email",
  asyncHandler(async function (req, res) {
    const { email } = req.params;
    const reviews = await prismaClient.review.findMany({
      where: {
        user: {
          email: email,
        },
      },
    });
    res.json(reviews);
  })
);

router.get(
  "",
  asyncHandler(async function (_req, res) {
    const review = await prismaClient.review.findMany();
    res.json(review);
  })
);

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const review = await prismaClient.review.findUnique({
      where: {
        id: id,
      },
    });
    res.json(review);
  })
);

router.get(
  "/title/:title",
  asyncHandler(async function (req, res) {
    const { title } = req.params;
    const reviews = await prismaClient.review.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    });
    res.json(reviews);
  })
);

router.get(
  "/text/:text",
  asyncHandler(async function (req, res) {
    const { text } = req.params;
    const reviews = await prismaClient.review.findMany({
      where: {
        text: {
          contains: text,
        },
      },
    });
    res.json(reviews);
  })
);

router.get(
  "/rating/:rating",
  asyncHandler(async function (req, res) {
    const { rating } = req.params;
    const reviews = await prismaClient.review.findMany({
      where: {
        rating: parseInt(rating),
      },
    });
    res.json(reviews);
  })
);

router.put(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const { title, text, rating } = req.body;

    const updateData = {};

    title && (updateData.title = title);
    text && (updateData.text = text);
    rating && (updateData.rating = rating);

    await prismaClient.review.update({
      where: {
        id: id,
      },
      data: updateData,
    });

    res.send(`Review with id ${id} has been updated successfully!`);
  })
);

router.delete(
  "",
  asyncHandler(async function (_req, res) {
    await prismaClient.review.deleteMany();
    res.send("All reviews has been deleted successfully!");
  })
);

router.delete(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;

    await prismaClient.review.delete({
      where: {
        id,
      },
    });
    res.send(`Review with id ${id} has been deleted successfully!`);
  })
);

router.delete(
  "/book/name/:name",
  asyncHandler(async function (req, res) {
    const { name } = req.params;

    await prismaClient.review.deleteMany({
      where: {
        book: {
          name, // se traduce ca name: name
        },
      },
    });
    res.send(
      `Reviews for the Book with name ${name} has been deleted successfully!`
    );
  })
);

router.delete(
  "/user/email/:email",
  asyncHandler(async function (req, res) {
    const { email } = req.params;

    await prismaClient.review.deleteMany({
      where: {
        user: {
          email,
        },
      },
    });
    res.send(
      `Reviews for the User with email ${email} has been deleted successfully!`
    );
  })
);

router.delete(
  "/title/:title",
  asyncHandler(async function (req, res) {
    const { title } = req.params;

    await prismaClient.review.deleteMany({
      where: {
        title,
      },
    });
    res.send(`Review with title ${title} has been deleted successfully!`);
  })
);

router.delete(
  "/text/:text",
  asyncHandler(async function (req, res) {
    const { text } = req.params;

    await prismaClient.review.deleteMany({
      where: {
        text,
      },
    });
    res.send(`Review with text ${text} has been deleted successfully!`);
  })
);

router.delete(
  "/rating/:rating",
  asyncHandler(async function (req, res) {
    const { rating } = req.params;

    await prismaClient.review.deleteMany({
      where: {
        rating: parseInt(rating),
      },
    });

    res.send(`Reviews with rating ${rating} has been deleted successfully!`);
  })
);

export default router;
