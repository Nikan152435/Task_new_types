import Movie from '../models/Movie';

describe('Movie', () => {
    it('should create instance with correct properties', () => {
        const movie = new Movie('Inception', 2010, 'USA', 'Sci-Fi', 8.8, 'Christopher Nolan', ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page']);
        expect(movie.title).toBe('Inception');
        expect(movie.year).toBe(2010);
        expect(movie.country).toBe('USA');
        // Проверки для других свойств
    });
});