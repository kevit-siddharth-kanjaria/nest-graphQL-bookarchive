import { Field, ID, InputType, Int, PartialType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class CreateAuthor {
    @Field()
    name: string;

    @Field(() => Int)
    age: number;

    @Field(() => [String])
    languages: string[];
}

@InputType()
export class UpdateAuthor extends PartialType(CreateAuthor) {
    @Field(() => ID)
    _id: Types.ObjectId;
}
