import { Query, Resolver } from '@nestjs/graphql';

const authors = [
    { id: 1, name: 'Dan Brown', age: 50, langauges: ['english'] },
    { id: 2, name: 'Mathew Rilley', age: 35, langauges: ['english'] },
    { id: 3, name: 'Sam Bourne', age: 44, langauges: ['english'] },
    { id: 4, name: 'Robert Ludlum', age: 0, langauges: ['english'] },
];
@Resolver('Author')
export class AuthorResolver {
    @Query('authors')
    getAuthors() {
        return authors;
    }
}
