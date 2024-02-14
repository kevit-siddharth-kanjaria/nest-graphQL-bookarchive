import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { BookModule } from './components/book/book.module';
import { AuthorModule } from './components/author/author.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        MongooseModule.forRoot(`${process.env.MONGO_DB}` || 'mongodb://localhost:27017/bookarchive'),
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
