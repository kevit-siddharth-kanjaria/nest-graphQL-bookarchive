import { Query, Resolver } from '@nestjs/graphql';

const books = [
    {
        id: 1,
        title: 'Deception Point',
        author: [{ id: 1, name: 'Dan Brown', age: 50, langauges: ['english'] }],
        price: 500,
    },
    {
        id: 2,
        title: 'Digital Fortress',
        author: [{ id: 1, name: 'Dan Brown', age: 50, langauges: ['english'] }],
        price: 500,
    },
    {
        id: 3,
        title: 'Angels and Demons',
        author: [{ id: 1, name: 'Dan Brown', age: 50, langauges: ['english'] }],
        price: 500,
    },
    { id: 4, title: 'Temple', author: [{ id: 2, name: 'Mathew Rilley', age: 35, langauges: ['english'] }], price: 500 },
    {
        id: 5,
        title: 'Severn wonders',
        author: [{ id: 2, name: 'Mathew Rilley', age: 35, langauges: ['english'] }],
        price: 500,
    },
    {
        id: 6,
        title: 'The Righteous Men',
        author: [{ id: 3, name: 'Sam Bourne', age: 44, langauges: ['english'] }],
        price: 500,
    },
    {
        id: 7,
        title: 'The Last Testament',
        author: [{ id: 3, name: 'Sam Bourne', age: 44, langauges: ['english'] }],
        price: 500,
    },
    {
        id: 8,
        title: 'Bourne Identity',
        author: [{ id: 4, name: 'Robert Ludlum', age: 0, langauges: ['english'] }],
        price: 500,
    },
    {
        id: 9,
        title: 'Bourne Legacy',
        author: [{ id: 4, name: 'Robert Ludlum', age: 0, langauges: ['english'] }],
        price: 500,
    },
];

@Resolver('Book')
export class BookResolver {
    @Query('books')
    getBooks() {
        return books;
    }
}
