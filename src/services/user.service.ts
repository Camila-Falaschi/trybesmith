import { IUser } from '../interfaces';
import UserModel from '../models/user.model';
import createToken from '../utils/createToken';

export default class UserService {
  userModel = new UserModel();

  async create(newUser: IUser): Promise<string> {
    await this.userModel.create(newUser);

    const { password, ...data } = newUser;

    return createToken(data);
  }
}