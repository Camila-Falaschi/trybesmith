import { Request, Response, NextFunction } from 'express';
import AppErrors from '../errors/AppErrors';
import { ILogin, IProduct, IUser } from '../interfaces';
import { productSchema, userSchema } from '../utils/schemas';

function status(error: string) { return error.includes('required') ? 400 : 422; }

export function validateProduct(req: Request, res: Response, next: NextFunction) {
  const product: IProduct = req.body;
  const { error } = productSchema.validate(product);

  if (error) throw new AppErrors(status(error.message), error.message);

  next();
}

export function validateUser(req: Request, _res: Response, next: NextFunction) {
  const product: IUser = req.body;
  const { error } = userSchema.validate(product);

  if (error) throw new AppErrors(status(error.message), error.message);

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