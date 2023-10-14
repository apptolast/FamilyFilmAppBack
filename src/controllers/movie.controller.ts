import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import prisma from "../lib/prisma";

class MovieController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.movie.findMany({
      include: {
        genres: {
          include: {
            genre: true,
          }
        },
      },
    });

    if (!data)
      return next({
        status: StatusCodes.NOT_FOUND,
        message: "Not movies registered",
      });

    res.status(StatusCodes.OK).json({ status: "success", data });
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.movie.findFirst({
      where: {
        id: Number(req.params.id),
      },
      include: {
        genres: {
          include: {
            genre: true,
          }
        },
      },
    });

    if (!data)
      return next({
        status: StatusCodes.NOT_FOUND,
        message: "Movie not found",
      });

    res.status(StatusCodes.OK).json({ status: "success", data });
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.movie.create({
      data: req.body,
    });

    if (!data)
      return next({
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        message: "Some params are not valid",
      });

    res.status(StatusCodes.CREATED).json({ status: "success", data });
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.movie.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    if (!data)
      return next({
        status: StatusCodes.NOT_FOUND,
        message: "Not movie found",
      });

    res.status(StatusCodes.OK).json({ status: "success", data });
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.movie.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!data)
      return next({
        status: StatusCodes.NOT_FOUND,
        message: "Not movie found",
      });

    res.status(StatusCodes.NO_CONTENT).json({ status: "success", data });
  }
}

export default new MovieController();
