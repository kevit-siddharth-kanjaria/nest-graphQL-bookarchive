import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './book.schema';
import { Model } from 'mongoose';
import { CreateBookDto, UpdateBookDto } from './book.dto';

@Injectable()
export class BookService {
    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

    async addBook(bookData: CreateBookDto): Promise<BookDocument> {
        return await this.bookModel.create(bookData);
    }

    async updateBook(updateData: UpdateBookDto): Promise<BookDocument> {
        return await this.bookModel.findOneAndUpdate({ _id: updateData._id }, updateData);
    }

    async deleteBook(deleteData: UpdateBookDto): Promise<BookDocument> {
        return await this.bookModel.findOneAndDelete({ _id: deleteData._id });
    }
    async getBooks(): Promise<Book[]> {
        return await this.bookModel.find().exec();
    }
}
