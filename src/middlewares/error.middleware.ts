import { Request, Response, NextFunction } from 'express';
import AppErrors from '../errors/AppErrors';

export default function errorMiddleware(
  err: Error,
  _req: Request, 
  res: Response, 
  _next: NextFunction,
) {
  const { status, message } = err as AppErrors;
  res.status(status || 500).json({ message });
}