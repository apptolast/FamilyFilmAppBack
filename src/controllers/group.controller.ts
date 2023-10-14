/* The GroupController class handles CRUD operations for groups in an Express application using Prisma
as the ORM. */
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import prisma from "../lib/prisma";

class GroupController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.group.findMany({
      where: {
        users: {
          some: {
            user: {
              id: res.locals.payload.id,
            },
          },
        },
      },
      include: {
        watchList: {
          include: {
            movie: true,
          },
        },
        viewList: {
          include: {
            movie: true,
          },
        },
        users: {
          include: {
            user: true
          }
        }
      },
    });

    if (!data) {
      return next({
        status: StatusCodes.NOT_FOUND,
        message: "Not groups registered",
      });
    }

    res.status(StatusCodes.OK).json({ status: "success", data });
  }
  async getById(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.group.findFirst({
      where: {
        id: Number(req.params.id),
        users: {
          some: {
            user: {
              id: res.locals.payload.id,
            },
          },
        },
      },
      include: {
        watchList: {
          include: {
            movie: true,
          },
        },
        viewList: {
          include: {
            movie: true,
          },
        },
        users: {
          include: {
            user: true
          }
        }
      },
    });

    if (!data) {
      return next({
        status: StatusCodes.NOT_FOUND,
        message: "Not groups registered",
      });
    }

    res.status(StatusCodes.OK).json({ status: "success", data });
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.group.create({
      data: req.body,
    });

    if (!data)
      return next({
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        message: "Not group found",
      });

    res.status(StatusCodes.OK).json({ status: "success", data });
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.group.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    if (!data)
      return next({
        status: StatusCodes.NOT_FOUND,
        message: "Not group found",
      });

    res.status(StatusCodes.OK).json({ status: "success", data });
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.group.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!data)
      return next({
        status: StatusCodes.NOT_FOUND,
        message: "Not group found",
      });

    res.status(StatusCodes.NO_CONTENT).json({ status: "success", data });
  }

  async addWatch(req: Request, res: Response, next: NextFunction) {
    const movieId: number = Number(req.body.movieId);

    if (!movieId)
      return next({
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        message: "No movieId received",
      });

    const data = await prisma.watchList.create({
      data: {
        group_id: Number(req.params.id),
        movie_id: movieId,
      },
    });

    res.status(StatusCodes.OK).json({ status: "success", data });
  }

  async addView(req: Request, res: Response, next: NextFunction) {
    const movieId: number = Number(req.body.movieId);

    if (!movieId)
      return next({
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        message: "No movieId received",
      });

    const data = await prisma.viewList.create({
      data: {
        group_id: Number(req.params.id),
        movie_id: movieId,
      },
    });

    res.status(StatusCodes.OK).json({ status: "success", data });
  }

  async removeWatch(req: Request, res: Response, next: NextFunction) {
    const movieId: number = Number(req.body.movieId);

    if (!movieId)
      return next({
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        message: "No movieId received",
      });

    const data = await prisma.watchList.deleteMany({
      where: {
        group_id: Number(req.params.id),
        movie_id: movieId,
      },
    });

    res.status(StatusCodes.NO_CONTENT).json({ status: "success", data });
  }

  async removeView(req: Request, res: Response, next: NextFunction) {
    const movieId: number = Number(req.body.movieId);

    if (!movieId)
      return next({
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        message: "No movieId received",
      });

    const data = await prisma.viewList.deleteMany({
      where: {
        group_id: Number(req.params.id),
        movie_id: movieId,
      },
    });

    res.status(StatusCodes.NO_CONTENT).json({ status: "success", data });
  }
}

export default new GroupController();
