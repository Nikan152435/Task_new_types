export default class Movie {
    title: string;
    year: number;
    country: string;
    genre: string;
    rating: number;
    director: string;
    actors: string[];

    constructor(title: string, year: number, country: string, genre: string, rating: number, director: string, actors: string[]) {
        this.title = title;
        this.year = year;
        this.country = country;
        this.genre = genre;
        this.rating = rating;
        this.director = director;
        this.actors = actors;
    }
}