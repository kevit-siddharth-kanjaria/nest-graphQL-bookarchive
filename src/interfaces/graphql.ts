/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Author {
    id: string;
    name: string;
    age: number;
    languages?: Nullable<Nullable<string>[]>;
}

export interface IQuery {
    authors(): Nullable<Nullable<Author>[]> | Promise<Nullable<Nullable<Author>[]>>;
    books(): Nullable<Nullable<Book>[]> | Promise<Nullable<Nullable<Book>[]>>;
}

export interface IMutation {
    addAuthor(authorData: Author): Nullable<Author> | Promise<Nullable<Author>>;
}

export interface Book {
    id: string;
    title: string;
    author: Nullable<Author>[];
}

type Nullable<T> = T | null;
