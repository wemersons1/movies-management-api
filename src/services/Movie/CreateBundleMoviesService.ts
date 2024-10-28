import dbClient from "../../dbClient";
interface Movie {
    adult: boolean;
    original_title: string;
    title: string;
    overview: string;
    poster_path?: string;
    release_date: string;
}

class CreateBundleMoviesService {
    async execute(data: Movie[]): Promise<void> {
        await dbClient.movie.createMany({
                    data,
                    skipDuplicates: true
                });
    }
}

export { CreateBundleMoviesService }