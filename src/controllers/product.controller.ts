import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  productService = new ProductService();

  async create(req: Request, res: Response) {
    const product = req.body;
    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  }
}