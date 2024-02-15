import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { BookModule } from './components/book/book.module';
import { AuthorModule } from './components/author/author.module';
import { ConfigModule } from '@nestjs/config';
import { DynamooseModule } from 'nestjs-dynamoose';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        DynamooseModule.forRoot({
            aws: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: process.env.AWS_REGION,
            },
        }),
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            playground: true,
            autoSchemaFile: 'schema.gql',
        }),
        BookModule,
        AuthorModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
