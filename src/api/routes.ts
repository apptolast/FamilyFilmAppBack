import { Router } from 'express';
import authRouter from '../routers/auth.router';
import userRouter from '../routers/user.router';
import movieRouter from '../routers/movie.router';

const router = Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);

router.use('/movies', movieRouter);

export default router;