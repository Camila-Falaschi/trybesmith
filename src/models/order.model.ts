import { RowDataPacket } from 'mysql2';
import mysql from './connection';

import { IOrder } from '../interfaces';

export default class OrderModel {
  connection = mysql;

  async getAll(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute<(IOrder & RowDataPacket)[]>(
      `SELECT Orders.id, Orders.userId, JSON_ARRAYAGG(Products.id) AS productsIds
      FROM Trybesmith.Orders AS Orders
      INNER JOIN Trybesmith.Products AS Products
      ON Orders.id = Products.orderId
      GROUP BY Orders.id;`);
    return rows;
  }
}