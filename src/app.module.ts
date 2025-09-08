import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { UserAPI } from './user/user.api';

@Module({
  imports: [
    TaskModule,
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
  controllers: [AppController],
  providers: [AppService, UserAPI],
})
export class AppModule {}
