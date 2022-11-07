import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import { validateOrder, validateToken } from '../middlewares/valuesValidation';

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get('/', (req, res) => orderController.getAll(req, res));
orderRouter.post('/', validateToken, validateOrder, (req, res) => orderController.create(req, res));

export default orderRouter;