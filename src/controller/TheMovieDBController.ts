import { Request, Response } from "express";
import { ListMoviesService } from "../services/Movie/ListMoviesService";
import { SyncTheMoviesDBPaginatedService } from "../services/TheMovieDB/SyncTheMoviesDBPaginatedService";

class TheMovieDBController {
    async syncMoviesDB(req: Request, res: Response) {
        const { body: params } = req;
        const syncTheMoviesDBPaginatedService = new SyncTheMoviesDBPaginatedService();

        syncTheMoviesDBPaginatedService.execute(params);

        res.send({
            message: 'Importação realizada com sucesso'
        });
    }
}

export { TheMovieDBController };