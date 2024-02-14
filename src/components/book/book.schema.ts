import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    author: string;

    @Prop()
    language: string;

    @Prop({ required: true })
    genre: string[];

    @Prop({ required: true })
    ISBN: number;

    @Prop({ required: true })
    length: string;

    @Prop({ required: true })
    description: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
