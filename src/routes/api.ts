import { Router } from 'express';
import { MovieController } from '../controller/MovieController';
import { TheMovieDBController } from '../controller/TheMovieDBController';

const router = Router();

router.post('/sync-themoviedb', new TheMovieDBController().syncMoviesDB);
router.get('/movies', new MovieController().index);

export { router }