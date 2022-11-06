import { IOrder } from '../interfaces';
import OrderModel from '../models/order.model';

export default class OrderService {
  orderModel = new OrderModel();

  async getAll(): Promise<IOrder[]> {
    return this.orderModel.getAll();
  }
}