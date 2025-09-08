import { UserEntity } from 'src/application/domain/domain/user.model';

export interface UserService {
  findAll(): Promise<UserEntity[]>;
  findOne(id: string): Promise<UserEntity>;
}
