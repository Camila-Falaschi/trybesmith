import AppErrors from '../errors/AppErrors';
import { ILogin, IUser } from '../interfaces';
import UserModel from '../models/user.model';
import createToken from '../utils/createToken';

export default class LoginService {
  userModel = new UserModel();

  async loginToken(login: ILogin): Promise<string> {
    const { username, password } = login;

    const user: IUser = await this.userModel.findByUsername(username);

    if (!user || user.password !== password) {
      throw new AppErrors(401, 'Username or password invalid');
    }

    const { password: word, ...data } = user;

    return createToken(data);
  }
}