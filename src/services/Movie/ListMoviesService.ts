import dbClient from "../../dbClient";

interface Filter {
    page: number;
    title?: string;
}

const PER_PAGE = 12;
class ListMoviesService {
    async execute(params: Filter) {
        const { page, title } = params;
    
        const [data, total] = await Promise.all([
            dbClient.movie.findMany({
                skip: (page - 1) * PER_PAGE,
                take: PER_PAGE,
                orderBy: { release_date: 'asc' },
                where: title ? { title: { contains: title } } : undefined,
            }),
            dbClient.movie.count({
                where: title ? { title: { contains: title } } : undefined,
            }),
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