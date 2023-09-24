import { Router } from 'express';
import rescue from 'express-rescue';
import authMiddleware from '../middlewares/auth';
import groupController from '../controllers/group.controller';


const groupRouter = Router();

groupRouter.route('/').get(authMiddleware, rescue(groupController.getAll));
groupRouter.route('/:id').get(authMiddleware, rescue(groupController.getById));

groupRouter.route('/').post(authMiddleware, rescue(groupController.create));

groupRouter.route('/:id').put(authMiddleware, rescue(groupController.update));

groupRouter.route('/:id').delete(authMiddleware, rescue(groupController.delete));

export default groupRouter;