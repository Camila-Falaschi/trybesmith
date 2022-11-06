import { Request, Response, NextFunction } from 'express';
import AppErrors from '../errors/AppErrors';
import { IProduct, IUser } from '../interfaces';

export function validateProduct(req: Request, res: Response, next: NextFunction) {
  const product: IProduct = req.body;
  const { name, amount } = product;

  if (!name || !amount) throw new AppErrors(400, 'Some required fields are missing');

  next();
}

export function validateUser(req: Request, res: Response, next: NextFunction) {
  const product: IUser = req.body;
  const { username, classe, level, password } = product;

  if (!username || !classe || !level || !password) {
    throw new AppErrors(400, 'Some required fields are missing');
  }

  next();
}

export function validateToken() {}