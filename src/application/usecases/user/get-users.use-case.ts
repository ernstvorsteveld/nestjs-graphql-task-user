import { UserAPI } from 'src/adapters/out/user/user.api';
import { UserEntity } from 'src/application/domain/domain/user.model';
import { GetUsersPort } from 'src/ports/in/user/get-users.port';

export class GetUsersUseCase implements GetUsersPort {
  constructor(private readonly userApi: UserAPI) {}

  async execute(): Promise<UserEntity[]> {
    return this.userApi.findAll();
  }
}
