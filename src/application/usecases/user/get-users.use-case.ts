import { Inject, Injectable } from '@nestjs/common';
import { UserAPI } from 'src/adapters/out/user/user.api';
import { UserEntity } from 'src/application/domain/domain/user.model';
import { GetUsersPort } from 'src/ports/in/user/get-users.port';

@Injectable()
export class GetUsersUseCase implements GetUsersPort {
  constructor(@Inject(UserAPI) private readonly userApi: UserAPI) {}

  async execute(): Promise<UserEntity[]> {
    return this.userApi.findAll();
  }
}
