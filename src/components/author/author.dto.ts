import { PartialType } from '@nestjs/mapped-types';
import { Field, Int } from '@nestjs/graphql';

export class CreateAuthorDto {
    @Field()
    name: string;

    @Field(() => Int)
    age: number;

    @Field(() => [String])
    languages: [string];
}

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
    @Field()
    name: string;
}
