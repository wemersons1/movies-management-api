import { ListMovieService } from "../services/TheMovieDB/ListMovieService";


export class GetMovies {
    async run() {
   
        try {

            const listMoviesService = new ListMovieService();
            let page = 1;

            while (true) {
                const params = {
                    page,
                    sort_by: 'primary_release_date.asc'
                } 

                const movies = await listMoviesService.execute(params);
                const { total_pages: totalPages} = movies;

                if(page == totalPages) break;
                console.log(page + '\n');

                page ++;
            }

        } catch(error) {
 
        }
    }
}

const getMovies = new GetMovies();

getMovies.run();