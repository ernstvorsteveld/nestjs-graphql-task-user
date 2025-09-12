import { UserEntity } from 'src/application/domain/domain/user.model';

export const GetUsersPort = Symbol('GetUsersPort');
export interface GetUsersPort {
  execute(): Promise<UserEntity[]>;
}
