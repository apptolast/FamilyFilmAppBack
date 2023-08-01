import { Router } from 'express';
import rescue from 'express-rescue';
import movieController from '../controllers/movie.controller';

const movieRouter = Router();

movieRouter.route('/').get(rescue(movieController.getAll));
movieRouter.route('/:id').get(rescue(movieController.getById));

movieRouter.route('/').post(rescue(movieController.create));

movieRouter.route('/:id').put(rescue(movieController.update));

movieRouter.route('/:id').delete(rescue(movieController.delete));

export default movieRouter;