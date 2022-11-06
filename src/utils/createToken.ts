import * as jwt from 'jsonwebtoken';

interface Data {
  id?: number,
  username: string,
  classe: string,
  level: number,
}

export default function createToken(data: Data) {
  return jwt.sign({ data }, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
}