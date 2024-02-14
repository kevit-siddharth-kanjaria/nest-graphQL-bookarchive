import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { CreateAuthor, UpdateAuthor, ViewAuthor } from './author.types';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/utlis/guards/auth.guard';

@UseGuards(AuthGuard)
@Resolver()
export class AuthorResolver {
    constructor(private readonly authorService: AuthorService) {}

    @Query(() => [ViewAuthor])
    async getAuthors() {
        return this.authorService.getAuthors();
    }

    @Mutation(() => ViewAuthor)
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
