export interface AuthorKey {
    name: string;
}

export interface Author extends AuthorKey {
    languages: [string];
    age: number;
}
