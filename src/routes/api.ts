import { Router } from 'express';
import { MovieController } from '../controller/MovieController';

const router = Router();
// router.post('/login', rulesStoreSessionRequest, new StoreSessionRequest().handle, new SessionController().store);

router.get('/movies', new MovieController().index);

export { router }