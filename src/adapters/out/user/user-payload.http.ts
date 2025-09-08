import { UserService } from 'src/ports/out/user/user';
import { UserAPI } from './user.api';
import { UserEntity } from 'src/application/domain/domain/user.model';

export class HttpUserPayload implements UserService {
  constructor(private readonly userApi: UserAPI) {}

  findAll(): Promise<UserEntity[]> {
    return this.userApi.findAll();
  }
  findOne(id: string): Promise<UserEntity> {
    return this.userApi.getUser(id);
  }
}
