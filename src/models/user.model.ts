import { RowDataPacket } from 'mysql2';
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

  async findByUsername(username: string): Promise<IUser> {
    const [[row]] = await this.connection.execute<(
    IUser & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.Users AS Users WHERE Users.username = ?;',
      [username],
      );
    return row;
  }
}