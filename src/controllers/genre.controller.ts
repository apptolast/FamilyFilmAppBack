import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import prisma from "../lib/prisma";

class GenreController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.genre.findMany({
      include: {
        movies: {
          include: {
            movie: true
          }
        }
      }
    });
    if (!data) {
      return next({
        status: StatusCodes.NOT_FOUND,
        message: "Not genres registered",
      });
    }
    res.status(StatusCodes.OK).json({ status: 'success', data });
  }
  async getById(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.genre.findFirst({
      where: {
        id: Number(req.params.id),
      },
      include: {
        movies: {
          include: {
            movie: true
          }
        }
      }
    });
    if (!data) {
      return next({
        status: StatusCodes.NOT_FOUND,
        message: "Not genres registered",
      });
    }
    res.status(StatusCodes.OK).json({ status: 'success', data });
  }
  async create(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.genre.create({
      data: req.body,
    });

    if (!data) {
      return next({
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        message: "Not genres registered",
      });
    }
    res.status(StatusCodes.CREATED).json({ status: 'success', data });
  }
  async update(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.genre.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    if (!data)
      return next({
        status: StatusCodes.NOT_FOUND,
        message: "Not genre found",
      });

    res.status(StatusCodes.OK).json({ status: 'success', data });
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.genre.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!data)
      return next({
        status: StatusCodes.NOT_FOUND,
        message: "Not genre found",
      });

    res.status(StatusCodes.NO_CONTENT).json({ status: 'success', data });
  }
}

export default new GenreController();
