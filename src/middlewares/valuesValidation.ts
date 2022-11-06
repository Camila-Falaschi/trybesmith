import { Request, Response, NextFunction } from 'express';
import AppErrors from '../errors/AppErrors';
import { IProduct } from '../interfaces';

export function validateProduct(req: Request, res: Response, next: NextFunction) {
  const product: IProduct = req.body;
  const { name, amount } = product;

  if (!name || !amount) throw new AppErrors(400, 'Some required fields are missing');

  next();
}

export function validateToken() {}