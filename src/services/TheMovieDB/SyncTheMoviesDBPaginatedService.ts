import { SyncMoviesDBService } from "./SyncMoviesDBService";

interface Params {
    release_init?: string;
    release_end?: string;
}

class SyncTheMoviesDBPaginatedService {
    async execute(params: Params):Promise<void> {
        const syncMoviesDBService = new SyncMoviesDBService();
        let currentPage = 1;

        while (true) {
            const totalPages = await syncMoviesDBService.execute({
                                ...params,
                                page: currentPage,
                                sort_by: 'primary_release_date.asc'
                            });

            if (currentPage == totalPages) {
                break;
            }

            currentPage ++;
        }
    }
}

export { SyncTheMoviesDBPaginatedService }