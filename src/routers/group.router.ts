import { Router } from 'express';
import rescue from 'express-rescue';
import groupController from '../controllers/group.controller';


const groupRouter = Router();

groupRouter.route('/').get(rescue(groupController.getAll));
groupRouter.route('/:id').get(rescue(groupController.getById));

groupRouter.route('users/:userId/groups').get(rescue(groupController.getAllByUserId));
groupRouter.route('users/:userId/groups/:id').get(rescue(groupController.getOneByUserId));

groupRouter.route('/').post(rescue(groupController.create));

groupRouter.route('/:id').put(rescue(groupController.update));

groupRouter.route('/:id').delete(rescue(groupController.delete));

export default groupRouter;