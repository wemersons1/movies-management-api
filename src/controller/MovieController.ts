import { Request, Response } from "express";
import { ListMoviesService } from "../services/Movie/ListMoviesService";

class MovieController {
    async index(req: Request, res: Response) {
        const { params } = req;
        const filter = {
            page: params.page ? +params.page : 1,
            genre_id: +params.page, 
            release_date: params.page, 
            title: params.title
        }

        const listMoviesService = new ListMoviesService();

        const movies =  await listMoviesService.execute(filter);   

        res.json(movies);
    }
}

export { MovieController };