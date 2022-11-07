import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import { validateLogin } from '../middlewares/valuesValidation';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/', validateLogin, (req, res) => loginController.login(req, res));

export default loginRouter;