import { Router } from 'express';
import { MovieController } from '../controller/MovieController';
import { TheMovieDBController } from '../controller/TheMovieDBController';
import { rulesSyncTheMovieDBRequest, StorerulesSyncTheMovieDBRequest } from '../validators/requests/TheMovieDB/SyncTheMovieDB';
import { IndexMovieRequest, rulesIndexMovieRequest } from '../validators/requests/movie/indexMovie';

const router = Router();

router.post('/sync-themoviedb', rulesSyncTheMovieDBRequest, new StorerulesSyncTheMovieDBRequest().handle, new TheMovieDBController().syncMoviesDB);
router.get('/movies', rulesIndexMovieRequest, new IndexMovieRequest().handle ,new MovieController().index);

export { router }