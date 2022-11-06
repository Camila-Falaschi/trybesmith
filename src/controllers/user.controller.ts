import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class ProductController {
  userService = new UserService();

  async create(req: Request, res: Response) {
    const newUser = req.body;
    const token = await this.userService.create(newUser);
    res.status(201).json({ token });
  }
}