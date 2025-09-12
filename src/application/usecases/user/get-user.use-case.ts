import { Inject, Injectable } from '@nestjs/common';
import { UserAPI } from 'src/adapters/out/user/user.api';
import { UserEntity } from 'src/application/domain/domain/user.model';
import { GetUserPort } from 'src/ports/in/user/get-user.port';

@Injectable()
export class GetUserUseCase implements GetUserPort {
  constructor(@Inject(UserAPI) private readonly userApi: UserAPI) {}

  async execute(id: string): Promise<UserEntity> {
    return this.userApi.getUser(id);
  }
}
