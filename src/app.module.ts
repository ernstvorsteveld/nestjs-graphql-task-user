import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TaskControllerModule } from './adapters/in/task/task.controller.module';
import { UserModule } from './adapters/out/user/user.module';

@Module({
  imports: [
    TaskControllerModule,
    UserModule,
    // Configure the GraphQL module
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // Automatically generate the GraphQL schema file
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // Enable the GraphQL Playground UI
      playground: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
