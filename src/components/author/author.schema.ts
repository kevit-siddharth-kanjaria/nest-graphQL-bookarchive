import { Schema } from 'dynamoose';

export const AuthorSchema = new Schema({
    name: { type: String, required: true, hashKey: true },

    age: { type: Number },

    languages: {
        type: Array,
        schema: [String],
    },
});
