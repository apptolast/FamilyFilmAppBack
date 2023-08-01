import { Router } from 'express';
import statusController from '../controllers/status.controller'

const authRouter = Router();

authRouter.route('/').get(statusController.status);

export default authRouter;