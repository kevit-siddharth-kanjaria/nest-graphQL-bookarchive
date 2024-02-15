import { Module } from '@nestjs/common';
import { AuthorSchema } from './author.schema';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { DynamooseModule } from 'nestjs-dynamoose';

@Module({
    imports: [
        DynamooseModule.forFeature([
            {
                name: 'Author',
                schema: AuthorSchema,
                options: {
                    tableName: 'test-exp-author',
                },
            },
        ]),
    ],
    providers: [AuthorResolver, AuthorService],
})
export class AuthorModule {}
