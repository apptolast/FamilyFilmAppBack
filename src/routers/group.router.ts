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

groupRouter.route('/:id/addWatch').patch(authMiddleware, rescue(groupController.addWatch));
groupRouter.route('/:id/removeWatch').patch(authMiddleware, rescue(groupController.removeWatch));
groupRouter.route('/:id/addView').patch(authMiddleware, rescue(groupController.addView));
groupRouter.route('/:id/removeView').patch(authMiddleware, rescue(groupController.removeView));

groupRouter.route('/:id/addMember').patch(authMiddleware, rescue(groupController.addMember));
groupRouter.route('/:id/removeMember').patch(authMiddleware, rescue(groupController.removeMember));

export default groupRouter;