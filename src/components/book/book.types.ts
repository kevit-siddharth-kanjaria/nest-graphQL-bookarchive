import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateBook {
    @Field()
    title: string;

    @Field()
    author: string;

    @Field()
    language: string;

    @Field(() => [String])
    genre: [string];

    @Field(() => Number)
    ISBN: number;

    @Field()
    length: string;

    @Field()
    description: string;
}

@InputType()
export class UpdateBook extends PartialType(CreateBook) {
    @Field(() => Number)
    ISBN: number;
}

@ObjectType()
export class ViewBook {
    @Field()
    title: string;

    @Field()
    author: string;

    @Field()
    language: string;

    @Field(() => [String])
    genre: [string];

    @Field(() => Number)
    ISBN: number;

    @Field()
    length: string;

    @Field()
    description: string;
}
