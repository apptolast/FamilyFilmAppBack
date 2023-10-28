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
      data: { 
        ...req.body,
        user_id: res.locals.payload.id,
      },
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
        user_id: res.locals.payload.id,
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
        user_id: res.locals.payload.id,
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

  async addMember(req: Request, res: Response, next: NextFunction) {
    const userId: number = Number(req.body.userId);

    if(!userId) {
      return next({
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        message: "No userId received"
      })
    }

    const group = await prisma.group.findFirst({
      where: {
        id: Number(req.params.id),
      }
    })

    if (!group) {
      return next({
        status: StatusCodes.FORBIDDEN,
        message: 'No group found',
      })
    }

    if (group.user_id !== res.locals.payload.id) {
      return next({
        status: StatusCodes.FORBIDDEN,
        message: 'No permissions to edit group'
      })
    }

    const data = await prisma.groupUsers.create({
      data: {
        group_id: group.id,
        user_id: userId,
      }
    })

    res.status(StatusCodes.OK).json({ status: "success", data });
  }

  async removeMember(req: Request, res: Response, next: NextFunction) {
    const userId: number = Number(req.body.userId);

    if(!userId) {
      return next({
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        message: "No userId received"
      })
    }

    const group = await prisma.group.findFirst({
      where: {
        id: Number(req.params.id),
      }
    })

    if (!group) {
      return next({
        status: StatusCodes.FORBIDDEN,
        message: 'No group found',
      })
    }

    if (group.user_id !== res.locals.payload.id) {
      return next({
        status: StatusCodes.FORBIDDEN,
        message: 'No permissions to edit group'
      })
    }

    const data = await prisma.groupUsers.deleteMany({
      where: {
        group_id: group.id,
        user_id: userId,
      }
    })

    res.status(StatusCodes.NO_CONTENT).json({ status: "success", data });
  }
}

export default new GroupController();
