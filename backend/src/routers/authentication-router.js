import asyncHandler from "express-async-handler";

import { Router } from "express";
import { prismaClient } from "../../prisma/client.js";
import ConflictException from "../exceptions/conflict-exception.js";

const router = Router();

router.post(
  "/activate",
  asyncHandler(async function (_req, res) {
    res.json({
      message: "Activation successfully! You can log in now!",
      severity: "success",
    });
  })
);

router.post(
  "/register",
  asyncHandler(async function (req, res) {
    const { lastName, firstName, email, password } = req.body;

    const pendingClient = await prismaClient.pendingClient.findUnique({
      where: {
        email,
      },
    });

    if (pendingClient) {
      throw new ConflictException(
        "There is already a pending client using this email address!"
      );
    }

    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      throw new ConflictException(
        "There is already an user using this email address!"
      );
    }

    await prismaClient.user.create({
      data: {
        lastName: lastName,
        firstName: firstName,
        email: email,
        password: password,
      },
    });

    res.json({
      message:
        "Registration successfully! Check email to activate your account!",
      severity: "info",
    });
  })
);

router.post(
  "/login",
  asyncHandler(async function (req, res) {
    const { email, password } = req.body;

    const user = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!email) {
      res.json({
        message: "There is no user with this email!",
        severity: "error",
      });
      return;
    }

    if (user.password !== password) {
      res.json({
        message: "Invalid password!",
        severity: "error",
      });
      return;
    }

    res.json({
      message: "You logged in successfully!",
      severity: "success",
    });
  })
);

router.post(
  "/forgot-password",
  asyncHandler(async function (req, res) {
    const { email } = req.body;

    res.json({
      message: "Request sent! Check your email to reset your password!",
      severity: "info",
    });
  })
);

export default router;
