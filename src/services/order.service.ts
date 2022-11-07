import AppErrors from '../errors/AppErrors';
import { IOrder } from '../interfaces';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';

export default class OrderService {
  orderModel = new OrderModel();

  productModel = new ProductModel();

  async getAll(): Promise<IOrder[]> {
    return this.orderModel.getAll();
  }

  async create(order: IOrder): Promise<IOrder> {
    const { userId, productsIds } = order;

    if (productsIds.length === 0) {
      throw new AppErrors(422, '"productsIds" must include only numbers');
    }

    const orderId = await this.orderModel.create(userId);

    const registration = productsIds.map((id: number) => this.productModel.update(orderId, id));

    await Promise.all(registration);

    return { userId, productsIds };
  }
}