import { SyncMoviesDBService } from "./SyncMoviesDBService";

interface Params {
    release_date_init?: string;
    release_date_end?: string;
}

class SyncTheMoviesDBPaginatedService {
    async execute(params: Params):Promise<void> {
        const syncMoviesDBService = new SyncMoviesDBService();
        const maxPages = 1000;

        for (let currentPage = 1; currentPage <= maxPages; currentPage++) {
            const totalPages = await syncMoviesDBService.execute({
                ...params,
                page: currentPage,
                sort_by: 'primary_release_date.asc',
            });

            if (currentPage >= totalPages) {
                break
            }
        }
    }
}

export { SyncTheMoviesDBPaginatedService }