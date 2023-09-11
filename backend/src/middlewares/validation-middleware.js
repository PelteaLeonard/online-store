import NotFoundException from "../exceptions/not-found-exception.js";

import { validationResult } from "express-validator";

const validationMiddleware = (req, _res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new NotFoundException(errors.array()[0].msg);
  }

  next();
};

export default validationMiddleware;
