import { Router } from 'express';
import userRegister from '../controllers/userController';

const userRouter = Router();

userRouter.post('/user',
    userRegister
);

export default userRouter;