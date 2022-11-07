import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import AppErrors from '../errors/AppErrors';
import { ILogin, IProduct, IUser } from '../interfaces';
import { loginSchema, orderSchema, productSchema, userSchema } from '../utils/schemas';

function status(error: string) { return error.includes('required') ? 400 : 422; }

export function validateProduct(req: Request, res: Response, next: NextFunction) {
  const product: IProduct = req.body;
  const { error } = productSchema.validate(product);

  if (error) throw new AppErrors(status(error.message), error.message);

  next();
}

export function validateUser(req: Request, _res: Response, next: NextFunction) {
  const user: IUser = req.body;
  const { error } = userSchema.validate(user);

  if (error) throw new AppErrors(status(error.message), error.message);

  next();
}

export function validateOrder(req: Request, _res: Response, next: NextFunction) {
  const { productsIds } = req.body;
  
  const { error } = orderSchema.validate({ productsIds });

  if (error) throw new AppErrors(status(error.message), error.message);

  next();
}

export function validateLogin(req: Request, _res: Response, next: NextFunction) {
  const login: ILogin = req.body;
  const { error } = loginSchema.validate(login);

  if (error) throw new AppErrors(status(error.message), error.message);

  next();
}

export function validateToken(req: Request, _res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;

  if (!token) throw new AppErrors(401, 'Token not found');

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.user = data;

    next();
  } catch (e) {
    throw new AppErrors(401, 'Invalid token');
  }
}