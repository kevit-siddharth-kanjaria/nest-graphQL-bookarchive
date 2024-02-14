import { PartialType } from '@nestjs/mapped-types';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Types } from 'mongoose';

export class CreateAuthorDto {
    @Field()
    name: string;

    @Field(() => Int)
    age: number;

    @Field(() => [String])
    languages: string[];
}

@ObjectType()
export class CreatedAuthor {
    @Field(() => ID)
    _id: string;

    @Field()
    name: string;

    @Field(() => Int)
    age: number;

    @Field(() => [String])
    languages: string[];
}

@ObjectType()
export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
    @Field(() => ID)
    _id: Types.ObjectId;
}

@ObjectType()
export class ViewAuthor {
    @Field(() => ID)
    _id: string;

    @Field()
    name: string;

    @Field(() => Int)
    age: number;

    @Field(() => [String])
    languages: [string];
}
