import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { CreatedAuthor, ViewAuthor } from './author.dto';
import { CreateAuthor, UpdateAuthor } from './author.input';

@Resolver()
export class AuthorResolver {
    constructor(private readonly authorService: AuthorService) {}

    @Query(() => [ViewAuthor])
    async getAuthors() {
        return this.authorService.getAuthors();
    }

    @Mutation(() => CreatedAuthor)
    async createAuthor(@Args('authorData') authorData: CreateAuthor) {
        return this.authorService.addAuthor(authorData);
    }

    @Mutation(() => ViewAuthor)
    async updateAuthor(@Args('updateData') updateData: UpdateAuthor) {
        return this.authorService.updateAuthor(updateData);
    }

    @Mutation(() => ViewAuthor)
    async deleteAuthor(@Args('deleteData') deleteData: UpdateAuthor) {
        return this.authorService.deleteAuthor(deleteData);
    }
}
