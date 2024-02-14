import { Field, ID, PartialType } from '@nestjs/graphql';
import { Types } from 'mongoose';

export class CreateBookDto {
    @Field()
    title: string;

    @Field()
    author: string;

    @Field()
    language: string;

    @Field(() => [String])
    genre: string[];

    @Field(() => Number)
    ISBN: number;

    @Field()
    length: string;

    @Field()
    description: string;
}

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @Field(() => ID)
    _id: Types.ObjectId;
}
