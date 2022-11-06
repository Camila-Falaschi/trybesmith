import { IProduct } from '../interfaces';
import ProductModel from '../models/product.model';

export default class ProductService {
  productModel = new ProductModel();

  async create(product: IProduct): Promise<IProduct> {
    return this.productModel.create(product);
  }

  async getAll(): Promise<IProduct[]> {
    return this.productModel.getAll();
  }
}