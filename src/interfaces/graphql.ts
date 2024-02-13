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
    langauges?: Nullable<Nullable<string>[]>;
}

export interface IQuery {
    authors(): Nullable<Nullable<Author>[]> | Promise<Nullable<Nullable<Author>[]>>;
    books(): Nullable<Nullable<Book>[]> | Promise<Nullable<Nullable<Book>[]>>;
}

export interface Book {
    id: string;
    title: string;
    author?: Nullable<Nullable<Author>[]>;
    price?: Nullable<number>;
}

type Nullable<T> = T | null;
