import { CreateBundleMoviesService } from "../services/Movie/CreateBundleMoviesService";
import { ListTheMoviesDBService } from "../services/TheMovieDB/ListTheMoviesDBService";
const MAX_PAGE = 10;
export class GetMovies {
    async run() {
   
        try {
            const listMoviesService = new ListTheMoviesDBService();
            const createBundleMoviesService = new CreateBundleMoviesService();

            for (let page = 1; page <= MAX_PAGE; page ++) {
                const params = {
                    page,
                    sort_by: 'primary_release_date.asc'
                } 

                const { results } = await listMoviesService.execute(params);
                const data = results.map(item => {
                    return {
                        external_id: item.id,
                        adult: item.adult,
                        original_title: item.original_title,
                        title: item.title,
                        overview: item.overview,
                        poster_path: item.poster_path,
                        release_date: new Date(item.release_date).toISOString() 
                    }
                });
      
                createBundleMoviesService.execute(data);
                page ++;
            }

        } catch(error) {
            console.error('Erro ao importar os filmes ', error);
        }
    }
}

const getMovies = new GetMovies();

getMovies.run();