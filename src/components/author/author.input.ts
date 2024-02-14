import { Field, InputType, Int } from '@nestjs/graphql';

@InputType('AuthorDataInput')
export class AuthorDataInput {
    @Field()
    name: string;

    @Field(() => Int)
    age: number;

    @Field(() => [String])
    languages: string[];
}
