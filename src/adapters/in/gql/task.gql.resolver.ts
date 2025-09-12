import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { TaskGqlDto, UserGqlDto } from './gql.dto';
import { Inject } from '@nestjs/common';
import { GetTaskPort } from 'src/ports/in/task/get-task.port';
import { GetTasksPort } from 'src/ports/in/task/get-tasks.port';
import { GetUserPort } from 'src/ports/in/user/get-user.port';

@Resolver(() => TaskGqlDto)
export class TaskResolver {
  constructor(
    @Inject(GetTaskPort)
    private readonly getTaskPort: GetTaskPort,
    @Inject(GetTasksPort)
    private readonly getTasksPort: GetTasksPort,
    @Inject(GetUserPort)
    private readonly getUserUseCase: GetUserPort,
  ) {}

  @Query(() => [TaskGqlDto], { name: 'tasks' })
  findAll() {
    return this.getTasksPort.execute();
  }

  @Query(() => TaskGqlDto, { name: 'task' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.getTaskPort.execute(id);
  }

  @ResolveField('user', () => UserGqlDto, { nullable: true })
  findUser(@Parent() task: TaskGqlDto): Promise<UserGqlDto | null> {
    if (task.userId == null) {
      return Promise.resolve(null);
    }
    return this.getUserUseCase.execute(task.userId);
  }
}
