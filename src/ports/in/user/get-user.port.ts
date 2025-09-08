import { UserEntity } from 'src/application/domain/domain/user.model';

export interface GetUserPort {
  execute(id: string): Promise<UserEntity>;
}
