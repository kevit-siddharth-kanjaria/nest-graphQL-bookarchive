import { Schema } from 'dynamoose';

export const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        author: {
            type: String,
            required: true,
        },

        language: {
            type: String,
        },

        genre: {
            type: Array,
            schema: [String],
        },

        ISBN: {
            type: Number,
            hashKey: true,
            required: true,
        },

        length: {
            type: String,
        },

        description: {
            type: String,
        },
    },
    { timestamps: true },
);
