import { Injectable } from '@nestjs/common';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Author, AuthorKey } from './author.interface';

@Injectable()
export class AuthorService {
    constructor(@InjectModel('Author') private authorModel: Model<Author, AuthorKey>) {}

    async addAuthor(authorData: CreateAuthorDto) {
        return await this.authorModel.create(authorData);
    }

    async updateAuthor(key: AuthorKey, updateData: UpdateAuthorDto) {
        return await this.authorModel.update(key, updateData);
    }

    async deleteAuthor(deleteData: UpdateAuthorDto) {
        return await this.authorModel.delete({ name: deleteData.name });
    }
    async getAuthor(bookData: UpdateAuthorDto) {
        return await this.authorModel.get({ name: bookData.name });
    }
}
