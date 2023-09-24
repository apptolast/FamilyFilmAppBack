import { Router } from 'express';
import rescue from 'express-rescue';
import authMiddleware from '../middlewares/auth';
import genreController from '../controllers/genre.controller';

const genreRouter = Router();

genreRouter.route('/').get(authMiddleware, rescue(genreController.getAll));
genreRouter.route('/:id').get(authMiddleware, rescue(genreController.getById));

genreRouter.route('/').post(authMiddleware, rescue(genreController.create));

genreRouter.route('/:id').put(authMiddleware, rescue(genreController.update));

genreRouter.route('/:id').delete(authMiddleware, rescue(genreController.delete));

export default genreRouter;