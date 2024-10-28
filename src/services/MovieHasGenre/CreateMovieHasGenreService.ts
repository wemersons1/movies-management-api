import dbClient from "../../dbClient";
interface MovieGenre {
    movie_id: number;
    genre_id: number;
}

class CreateMovieHasGenreService {
    async execute(data: MovieGenre[]): Promise<void> {
        await dbClient.movieHasGenre.createMany({
                    data,
                    skipDuplicates: true
                });
    }
}

export { CreateMovieHasGenreService }