export default class Movie {
    constructor(
    public title: string,
    public year: number,
    public country: string,
    public genre: string,
    public rating: number,
    public director: string,
    public actors: string[]
    ) {}
    }