import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { AuthorDataInput } from './author.input';
import { Author } from './author.schema';

const authors = [
    { id: 1, name: 'Dan Brown', age: 50, languages: ['english'] },
    { id: 2, name: 'Mathew Rilley', age: 35, languages: ['english'] },
    { id: 3, name: 'Sam Bourne', age: 44, languages: ['english'] },
    { id: 4, name: 'Robert Ludlum', age: 0, languages: ['english'] },
];
@Resolver('Author')
export class AuthorResolver {
    constructor(private readonly authorService: AuthorService) {}

    @Query('authors')
    getAuthors() {
        return authors;
    }

    @Mutation(() => Author, { name: 'addAuthor' })
    async addAuthor(@Args('authorData') authorData: AuthorDataInput) {
        return this.authorService.addAuthor(authorData);
    }
}
