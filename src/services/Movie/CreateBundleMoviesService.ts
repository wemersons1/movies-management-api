import dbClient from "../../dbClient";

interface Movie {
    external_id: number;
    adult: boolean;
    original_title: string;
    title: string;
    overview: string;
    poster_path?: string;
    release_date: string;
}

class CreateBundleMoviesService {
    async execute(data: Movie[]) {
        return await dbClient.movie.createMany({
                    data,
                    skipDuplicates: true
                });
    }
}

export { CreateBundleMoviesService }