import { ApiError } from "../utils/ApiResponse";
import { Request, Response, NextFunction } from "@/types/expressTypes";

export const errorHandler = (
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  console.error(err);

  res.status(statusCode).json({
    success: false,
    message,
  });
};
