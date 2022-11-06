import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import { validateProduct } from '../middlewares/valuesValidation';

const productRouter = Router();
const productController = new ProductController();

productRouter.post('/', validateProduct, (req, res) => productController.create(req, res));
productRouter.get('/', (req, res) => productController.getAll(req, res));

export default productRouter;