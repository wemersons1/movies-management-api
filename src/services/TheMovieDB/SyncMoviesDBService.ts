import { CreateBundleMoviesService } from "../Movie/CreateBundleMoviesService";
import { CreateMovieHasGenreService } from "../MovieHasGenre/CreateMovieHasGenreService";
import { ListTheMoviesDBService } from "./ListTheMoviesDBService";

interface Params {
    page: number;
    release_init?: string;
    release_end?: string;
    sort_by: string;
}

class SyncMoviesDBService {
    async execute(params: Params):Promise<number> {
        const listMoviesService = new ListTheMoviesDBService();
        const createBundleMoviesService = new CreateBundleMoviesService();
        const createBundleMoviesHasGenreService = new CreateMovieHasGenreService();

        const { results, total_pages } = await listMoviesService.execute(params);
        await this.createBundleMovies(results, createBundleMoviesService);
        await this.createBundleMoviesHasGenres(results, createBundleMoviesHasGenreService);

        return total_pages;
    }

    async createBundleMovies(results, createBundleMoviesService: CreateBundleMoviesService): Promise<void> {
        const data = results.map(movie => {
            return {
                id: movie.id,
                adult: movie.adult,
                original_title: movie.original_title,
                title: movie.title,
                overview: movie.overview,
                poster_path: movie.poster_path,
                release_date: this.getReleaseDate(movie.release_date)
            }
        });

        await createBundleMoviesService.execute(data);
    }

    getReleaseDate(releaseDate: string) {
        const date = new Date(releaseDate);
        
        if (isNaN(date.getTime())) {
            return null;
        }

        return new Date(releaseDate).toISOString()
    }

    async createBundleMoviesHasGenres(results, createBundleMoviesHasGenreService: CreateMovieHasGenreService): Promise<void> {
        const data = [];

        results.map(movie => {
            movie.genre_ids.map((genreId: number) => {
                data.push({
                    movie_id: movie.id,
                    genre_id: genreId
                });
            });
        });

        await createBundleMoviesHasGenreService.execute(data);
    }
}

export { SyncMoviesDBService }