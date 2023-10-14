import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import prisma from "../lib/prisma";

class UserController {
  async getById(req: Request, res: Response, next: NextFunction) {
    if (
      Number(req.params.id) !== res.locals.payload.id ||
      res.locals?.payload?.role !== "ADMIN"
    )
      return next({ status: StatusCodes.NOT_FOUND, message: "User not found" });

    const data = await prisma.user.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!data)
      return next({ status: StatusCodes.NOT_FOUND, message: "User not found" });

    res.status(StatusCodes.OK).json({ status: "success", data });
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    const query: Object =
      res.locals?.payload?.role !== "ADMIN"
        ? {
            where: {
              id: res.locals.payload.id,
            },
          }
        : {};
    const data = await prisma.user.findMany(query);

    if (!data)
      return next({
        status: StatusCodes.NOT_FOUND,
        message: "Users not found",
      });

    res.status(StatusCodes.OK).json({ status: "success", data });
  }
}

export default new UserController();
