import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './author.schema';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }])],
    providers: [AuthorResolver, AuthorService],
})
export class AuthorModule {}
