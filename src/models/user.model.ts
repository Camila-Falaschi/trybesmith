import mysql from './connection';

import { IUser } from '../interfaces';

export default class UserModel {
  connection = mysql;

  async create(newUser: IUser): Promise<void> {
    const { username, classe, level, password } = newUser;
    await this.connection.execute(
      'INSERT INTO Trybesmith.Users ( username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  }
}