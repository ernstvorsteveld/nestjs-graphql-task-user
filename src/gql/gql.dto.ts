import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';

@ObjectType()
export class UserGqlDto {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  age: number;

  @Field(() => [TaskGqlDto], { nullable: 'itemsAndList' })
  tasks?: TaskGqlDto[];
}

@ObjectType()
export class TaskGqlDto {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  userId?: string;

  @Field(() => UserGqlDto, { nullable: true })
  user?: UserGqlDto;
}
