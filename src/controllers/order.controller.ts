import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  orderService = new OrderService();

  async getAll(_req: Request, res: Response) {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  }

  async create(req: Request, res: Response) {
    const { data } = req.body.user;
    const { productsIds } = req.body;

    const orders = await this.orderService.create({ userId: data.id, productsIds });
    res.status(201).json(orders);
  }
}