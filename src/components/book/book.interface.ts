export interface BookKey {
    ISBN: number;
}

export interface Book extends BookKey {
    title: string;

    author: string;

    language?: string;

    genre: [string];

    length: string;

    description: string;
}
