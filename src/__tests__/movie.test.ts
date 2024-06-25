import Movie from '../models/Movie';

describe('Movie', () => {
    it('should create instance with correct properties', () => {
        const movie = new Movie(
            'Inception',
            2010,
            'USA', 
            'Sci-Fi', 
            8.8,
            'Christopher Nolan',
            ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page']
        );

        // expect(movie).toBeInstanceOf(Movie);
        const pattern = {
            title: 'Inception',
            year: 2010,
            country: 'USA',
            genre: 'Sci-Fi',
            rating: 8.8,
            director: 'Christopher Nolan',
            actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page']
        };
        expect(movie).toMatchObject(pattern);
       
        // Проверки для других свойств
    });
});