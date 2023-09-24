import { Router } from 'express';
import rescue from 'express-rescue';
import authMiddleware from '../middlewares/auth';
import movieController from '../controllers/movie.controller';

const movieRouter = Router();

movieRouter.route('/').get(authMiddleware, rescue(movieController.getAll));
movieRouter.route('/:id').get(authMiddleware, rescue(movieController.getById));

movieRouter.route('/').post(authMiddleware, rescue(movieController.create));

movieRouter.route('/:id').put(authMiddleware, rescue(movieController.update));

movieRouter.route('/:id').delete(authMiddleware, rescue(movieController.delete));

export default movieRouter;