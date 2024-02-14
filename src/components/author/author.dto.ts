import { PartialType } from '@nestjs/mapped-types';
import { Expose } from 'class-transformer';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
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

export class UpdateUserDto extends PartialType(CreateAuthorDto) {}

export class ViewAuthorDto {
    @Expose()
    _id: string;

    @Expose()
    name: string;

    @Expose()
    age: number;

    @Expose()
    languages: [string];
}
