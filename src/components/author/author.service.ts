import { Injectable } from '@nestjs/common';
import { Author, AuthorDocument } from './author.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';

@Injectable()
export class AuthorService {
    constructor(@InjectModel(Author.name) private authorModel: Model<Author>) {}

    async addAuthor(authorData: CreateAuthorDto): Promise<AuthorDocument> {
        return await this.authorModel.create(authorData);
    }

    async updateAuthor(updateData: UpdateAuthorDto): Promise<AuthorDocument> {
        return await this.authorModel.findOneAndUpdate({ _id: updateData._id }, updateData);
    }

    async deleteAuthor(deleteData: UpdateAuthorDto): Promise<AuthorDocument> {
        return await this.authorModel.findOneAndDelete({ _id: deleteData._id });
    }
    async getAuthors(): Promise<Author[]> {
        return await this.authorModel.find().exec();
    }
}
