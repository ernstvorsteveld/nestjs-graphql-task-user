import { UserAPI } from './user.api';
import { UserEntity } from 'src/application/domain/domain/user.model';
import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/ports/out/user/user-service';

@Injectable()
export class UserServiceHttp implements UserService {
  readonly userApi: UserAPI;

  constructor(@Inject() userApi: UserAPI) {
    this.userApi = userApi;
  }

  findAll(): Promise<UserEntity[]> {
    return this.userApi.findAll();
  }
  findOne(id: string): Promise<UserEntity> {
    return this.userApi.getUser(id);
  }
}
