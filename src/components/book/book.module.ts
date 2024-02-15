import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { BookSchema } from './book.schema';
import { DynamooseModule } from 'nestjs-dynamoose';

@Module({
    imports: [
        DynamooseModule.forFeature([
            {
                name: 'Book',
                schema: BookSchema,
                options: {
                    tableName: 'test-exp-book',
                },
            },
        ]),
    ],
    providers: [BookService, BookResolver],
})
export class BookModule {}
