import { UserEntity } from 'src/application/domain/domain/user.model';

export const GetUserPort = Symbol('GetUserPort');
export interface GetUserPort {
  execute(id: string): Promise<UserEntity>;
}
