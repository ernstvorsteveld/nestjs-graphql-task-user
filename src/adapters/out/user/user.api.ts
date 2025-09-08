import { RESTDataSource } from '@apollo/datasource-rest';
import { Injectable } from '@nestjs/common';
import { UserAPiPayload, UserPayload } from 'src/ports/out/user/user-payload';

@Injectable()
export class UserAPI extends RESTDataSource {
  override baseURL = 'http://localhost:3000';

  async getUser(id: string): Promise<UserPayload> {
    const userPayload = await this.get<UserAPiPayload>(
      `/users/${encodeURIComponent(id)}`,
    ).then((user: UserAPiPayload) => {
      const userPayload: UserPayload = {
        id: user._id,
        name: user.name,
        age: user.age,
      };
      return userPayload;
    });
    return userPayload;
  }

  async findAll(): Promise<UserPayload[]> {
    const data: UserAPiPayload[] = await this.get<UserAPiPayload[]>('/users');

    const users = data.map((user: UserAPiPayload) => {
      const userPayload: UserPayload = {
        id: user._id,
        name: user.name,
        age: user.age,
      };
      return userPayload;
    });
    return users;
  }
}
