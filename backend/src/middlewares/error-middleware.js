import ConflictException from "../exceptions/conflict-exception.js";
import NotFoundException from "../exceptions/not-found-exception.js";

const errorMiddleware = (err, req, res, next) => {
  let statusCode = 500;

  if (err instanceof ConflictException) {
    statusCode = 409;
  }

  if (err instanceof NotFoundException) {
    statusCode = 404;
  }

  console.log(`Error message: ${err.message}`);
  console.log(`Error stack: ${err.stack}`);
  console.log(`Error status code: ${500}`);

  res.status(statusCode).json({
    message: err.message,
    severity: "error",
  });
};

export default errorMiddleware;
