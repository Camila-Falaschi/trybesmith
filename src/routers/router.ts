import { Router } from 'express';
import { validateProduct } from '../middlewares/valuesValidation';
import productRouter from './product.router';

const router = Router();

router.use('/products', validateProduct, productRouter);

export default router;