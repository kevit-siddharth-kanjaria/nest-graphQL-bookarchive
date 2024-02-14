import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './author.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }])],
    providers: [],
})
export class AuthorModule {}
