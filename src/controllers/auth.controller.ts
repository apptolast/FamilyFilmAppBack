import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import prisma from '../lib/prisma';
import jwt from '../utils/jwt';

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    const { email, firebase_uuid } = req.body;

    if (!email || !firebase_uuid) {
      return next({
        status: StatusCodes.BAD_REQUEST,
        message: 'Some required fields are missing',
      });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return next({
        status: StatusCodes.NOT_FOUND,
        message: 'User not found',
      });
    }

    if (user.firebase_uuid !== firebase_uuid) {
      return next({
        status: StatusCodes.UNAUTHORIZED,
        message: 'Firebase UUID not match',
      });
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role });

    res.status(StatusCodes.OK).json({ status: 'success', token });
  }

  async register(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.user.create({
      data: req.body
    })

    if(!data){
      return next({
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        message: 'User info not valid'
      })
    }

    const token = jwt.sign({ id: data.id, email: data.email, role: data.role });

    res.status(StatusCodes.OK).json({ status: 'success', token })
  }
}

export default new AuthController();