import { Request, Response } from "express";
import { ListMoviesService } from "../services/Movie/ListMoviesService";

class MovieController {
    async index(req: Request, res: Response) {
        const { query } = req;
        const filter = {
            page: typeof +query.page == 'number' ? +query.page : 1, 
            title: typeof query.title == 'string' ? query.title : ''
        }

        const listMoviesService = new ListMoviesService();
        const movies =  await listMoviesService.execute(filter);   

        res.json(movies);
    }
}

export { MovieController };