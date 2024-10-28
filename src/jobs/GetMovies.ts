import { SyncMoviesDBService } from "../services/TheMovieDB/SyncMoviesDBService";

const MAX_PAGE = 200;
export class GetMovies {
    async run(): Promise<void> {
   
        try {
            for (let page = 1; page <= MAX_PAGE; page ++) {
                const params = {
                    page,
                    sort_by: 'primary_release_date.asc'
                } 

                const syncMoviesDBService = new SyncMoviesDBService();
                await syncMoviesDBService.execute(params);

                page ++;
            }

        } catch(error) {
            console.error('Erro ao importar os filmes ', error);
        }
    }
}

const getMovies = new GetMovies();

getMovies.run();