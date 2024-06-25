export default class Movie {
    
    public title: string;
    public year: number;
    public country: string;
    public genre: string;
    public rating: number;
    public director: string;
    public actors: string[];
  

    constructor(
    title: string, 
    year: number, 
    country: string, 
    genre: string, 
    rating: number, 
    director: string, 
    actors: string[]
) 
{
        this.title = title;
        this.year = year;
        this.country = country;
        this.genre = genre;
        this.rating = rating;
        this.director = director;
        this.actors = actors;
    }
}