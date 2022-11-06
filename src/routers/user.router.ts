import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { validateUser } from '../middlewares/valuesValidation';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', validateUser, (req, res) => userController.create(req, res));

export default userRouter;