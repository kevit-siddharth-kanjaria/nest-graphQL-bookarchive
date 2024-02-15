import { Injectable } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from './book.dto';
import { InjectModel, Item, Model } from 'nestjs-dynamoose';
import { Book, BookKey } from './book.interface';

@Injectable()
export class BookService {
    constructor(@InjectModel('Book') private bookModel: Model<Book, BookKey>) {}

    async addBook(bookData: CreateBookDto): Promise<Item<Book>> {
        return await this.bookModel.create(bookData);
    }

    async updateBook(key: BookKey, updateData: UpdateBookDto): Promise<Item<Book>> {
        return await this.bookModel.update(key, updateData);
    }

    async deleteBook(deleteData: UpdateBookDto): Promise<void> {
        return await this.bookModel.delete({ ISBN: deleteData.ISBN });
    }

    async getBook(bookData: UpdateBookDto): Promise<Item<Book>> {
        return await this.bookModel.get({ ISBN: bookData.ISBN });
    }
}
