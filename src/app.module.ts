import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { BookModule } from './components/book/book.module';
import { AuthorModule } from './components/author/author.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            typePaths: ['src/components/**/*.graphql'],
            definitions: { path: join(process.cwd(), 'src/interfaces/graphql.ts'), outputAs: 'interface' },
        }),
        BookModule,
        AuthorModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
