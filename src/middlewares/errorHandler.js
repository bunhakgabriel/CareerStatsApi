import ApiResponse from "../classes/ApiResponse.js";
import { AppError } from "../utils/AppError.js";

export function errorHandler(err, _req, res, _next) {
  // erro conhecido (AppError)
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json(new ApiResponse(false, null, err.message));
  }

  // erro desconhecido
  return res
    .status(500)
    .json(new ApiResponse(false, null, "Erro interno do servidor"));
}
