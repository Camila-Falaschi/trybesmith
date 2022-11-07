import { Request, Response, NextFunction } from 'express';
import AppErrors from '../errors/AppErrors';
import { ILogin, IProduct, IUser } from '../interfaces';

export function validateProduct(req: Request, res: Response, next: NextFunction) {
  const product: IProduct = req.body;
  const { name, amount } = product;

  if (!name || !amount) throw new AppErrors(400, 'Some required fields are missing');

  next();
}

export function validateUser(req: Request, _res: Response, next: NextFunction) {
  const product: IUser = req.body;
  const { username, classe, level, password } = product;

  if (!username || !classe || !level || !password) {
    throw new AppErrors(400, 'Some required fields are missing');
  }

  next();
}

export function validateLogin(req: Request, _res: Response, next: NextFunction) {
  const login: ILogin = req.body;
  const { username, password } = login;

  if (!username) {
    throw new AppErrors(400, '"username" is required');
  }

  if (!password) {
    throw new AppErrors(400, '"password" is required');
  }

  next();
}