import { Injectable } from '@nestjs/common';
import { Author } from './author.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AuthorDataInput } from './author.input';

@Injectable()
export class AuthorService {
    constructor(@InjectModel(Author.name) private readonly authorModel: Model<Author>) {}

    async addAuthor(authorBody: AuthorDataInput): Promise<Author> {
        try {
            const author = new this.authorModel(authorBody);
            return await author.save();
        } catch (error) {
            throw new Error();
        }
    }
}
