import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import prisma from '../lib/prisma';

class UserController {
  async getById(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.user.findUnique({
      where: { id: Number(req.params.id) },
    });
    
    if (!data)
    return next({ status: StatusCodes.NOT_FOUND, message: 'User not found' });
  
  res.status(StatusCodes.OK).json({ status: 'success', data });
}
async getAll(req: Request, res: Response, next: NextFunction) {
    const data = await prisma.user.findMany();

    if (!data)
      return next({ status: StatusCodes.NOT_FOUND, message: 'Users not found' });

    res.status(StatusCodes.OK).json({ status: 'success', data });
  }
}

export default new UserController();