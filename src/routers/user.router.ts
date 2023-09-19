import { Router } from 'express';
import rescue from 'express-rescue';
import userController from '../controllers/user.controller';
import groupController from '../controllers/group.controller';
import authMiddleware from '../middlewares/auth';

const userRouter = Router();

userRouter.route('/:id').get(authMiddleware, rescue(userController.getById));

userRouter.route('/:userId/groups').get(rescue(groupController.getAllByUserId));
userRouter.route('/:userId/groups/:id').get(rescue(groupController.getOneByUserId));

export default userRouter;