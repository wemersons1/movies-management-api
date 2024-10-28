import dbClient from "../../dbClient";

interface Filter {
    page: number;
    genre_id: number;
    release_date: string;
    title: string;
}

const PER_PAGE = 15;
class ListMoviesService {
    async execute(params: Filter) {
        const { page } = params;

        const [data, total] = await Promise.all([
            await dbClient.movie.findMany({
              skip: (page - 1) * PER_PAGE,
              take: PER_PAGE,
              orderBy: { release_date: 'asc' },
            }),
            dbClient.movie.count(),
          ]);
          
        return {
            current_page: page,
            last_page: Math.ceil(total / PER_PAGE),
            total,
            per_page: PER_PAGE,
            data,
        };
    }
}

export { ListMoviesService }