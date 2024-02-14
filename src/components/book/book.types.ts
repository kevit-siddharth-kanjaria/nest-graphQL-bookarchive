import { Field, ID, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class CreateBook {
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

@InputType()
export class UpdateBook extends PartialType(CreateBook) {
    @Field(() => ID)
    _id: Types.ObjectId;
}

@ObjectType()
export class ViewBook {
    @Field(() => ID)
    _id: string;
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
