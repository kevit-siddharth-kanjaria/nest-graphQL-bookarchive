import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/utlis/guards/auth.guard';
import { CreateBook, UpdateBook, ViewBook } from './book.types';
import { BookService } from './book.service';
@UseGuards(AuthGuard)
@Resolver()
export class BookResolver {
    constructor(private readonly bookService: BookService) {}

    @Query(() => [ViewBook])
    async getBooks() {
        return this.bookService.getBooks();
    }

    @Mutation(() => ViewBook)
    async createBook(@Args('bookData') bookData: CreateBook) {
        return this.bookService.addBook(bookData);
    }

    @Mutation(() => ViewBook)
    async updateBook(@Args('updateData') updateData: UpdateBook) {
        return this.bookService.updateBook(updateData);
    }

    @Mutation(() => ViewBook)
    async deleteBook(@Args('deleteData') deleteData: UpdateBook) {
        return this.bookService.deleteBook(deleteData);
    }
}
