import { Field, InputType, Int, ObjectType, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateAuthor {
    @Field()
    name: string;

    @Field(() => Int)
    age: number;

    @Field(() => [String])
    languages: [string];
}

@InputType()
export class UpdateAuthor extends PartialType(CreateAuthor) {
    @Field()
    name: string;
}

@ObjectType()
export class ViewAuthor {
    @Field()
    name: string;

    @Field(() => Int)
    age: number;

    @Field(() => [String])
    languages: [string];
}
