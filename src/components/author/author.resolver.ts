import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { CreateAuthor, UpdateAuthor, ViewAuthor } from './author.types';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/utlis/guards/auth.guard';
import { AuthorKey } from './author.interface';

@UseGuards(AuthGuard)
@Resolver()
export class AuthorResolver {
    constructor(private readonly authorService: AuthorService) {}

    @Query(() => ViewAuthor)
    async getAuthor(@Args('authorData') authorData: UpdateAuthor) {
        return this.authorService.getAuthor(authorData);
    }

    @Mutation(() => ViewAuthor)
    async createAuthor(@Args('authorData') authorData: CreateAuthor) {
        return this.authorService.addAuthor(authorData);
    }

    @Mutation(() => ViewAuthor)
    async updateAuthor(@Args('updateData') updateData: UpdateAuthor) {
        const key: AuthorKey = { name: updateData.name };
        delete updateData.name;
        return this.authorService.updateAuthor(key, updateData);
    }

    @Mutation(() => ViewAuthor)
    async deleteAuthor(@Args('deleteData') deleteData: UpdateAuthor) {
        return this.authorService.deleteAuthor(deleteData);
    }
}
