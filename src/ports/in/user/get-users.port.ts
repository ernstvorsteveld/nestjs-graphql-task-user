import { UserEntity } from 'src/application/domain/domain/user.model';

export interface GetUsersPort {
  execute(): Promise<UserEntity[]>;
}
