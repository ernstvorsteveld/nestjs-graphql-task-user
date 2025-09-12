import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserResolver } from './adapters/in/gql/user.gql.resolver';
import { TaskResolver } from './adapters/in/gql/task.gql.resolver';
import { TaskController } from './adapters/in/task/task.controller';
import { UserServiceHttp } from './adapters/out/user/user-service.http';
import { GetUserUseCase } from './application/usecases/user/get-user.use-case';
import { GetUsersUseCase } from './application/usecases/user/get-users.use-case';
import { GetUsersPort } from './ports/in/user/get-users.port';
import { GetUserPort } from './ports/in/user/get-user.port';
import { UserService } from './ports/out/user/user-service';
import { GetTaskPort } from './ports/in/task/get-task.port';
import { getTaskUseCase } from './application/usecases/task/get-task.use-case';
import { GetTasksPort } from './ports/in/task/get-tasks.port';
import { getTasksUseCase } from './application/usecases/task/get-tasks.use-case';
import { TaskStoreLocal } from './adapters/out/task-repository/local/task.repository.local';
import { TaskRepository } from './ports/out/task-store/task-repository';
import { UserAPI } from './adapters/out/user/user.api';
import { UpdateTaskUseCase } from './application/usecases/task/update-task.use-case';
import { UpdateTaskPort } from './ports/in/task/update-task.port';
import { RemoveTaskUseCase } from './application/usecases/task/remove-task.use-case';
import { RemoveTaskPort } from './ports/in/task/remove-task.port';
import { CreateTaskPort } from './ports/in/task/create-task.port';
import { CreateTaksUseCase } from './application/usecases/task/create-task.use-case';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
  ],
  controllers: [TaskController],
  providers: [
    TaskResolver,
    UserResolver,
    { provide: TaskRepository, useClass: TaskStoreLocal },
    { provide: GetTaskPort, useClass: getTaskUseCase },
    { provide: GetTasksPort, useClass: getTasksUseCase },
    { provide: GetUsersPort, useClass: GetUsersUseCase },
    { provide: GetUserPort, useClass: GetUserUseCase },
    { provide: UpdateTaskPort, useClass: UpdateTaskUseCase },
    { provide: CreateTaskPort, useClass: CreateTaksUseCase },
    { provide: RemoveTaskPort, useClass: RemoveTaskUseCase },
    { provide: GetTaskPort, useClass: getTaskUseCase },
    { provide: GetTasksPort, useClass: getTasksUseCase },
    { provide: UserService, useClass: UserServiceHttp },
    UserAPI,
  ],
})
export class AppModule {}
