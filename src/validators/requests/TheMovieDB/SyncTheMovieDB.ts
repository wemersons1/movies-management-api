import { body, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import { parse, isValid } from 'date-fns';

const rulesSyncTheMovieDBRequest = [
    body('release_date_init')  .isISO8601({ strict: true, strictSeparator: true }) // This checks the format YYYY-MM-DD
    .withMessage('Data de lançamento deve ser uma data no formato YYYY-MM-DD')
    .custom((value) => {
      const date_init = parse(value, 'yyyy-MM-dd', new Date());
      if (!isValid(date_init)) {
        throw new Error('Data inválida');
      }

      return true;
    }),
    body('release_date_end').isISO8601({ strict: true, strictSeparator: true }) // This checks the format YYYY-MM-DD
    .withMessage('Data de lançamento deve ser uma data no formato YYYY-MM-DD')
    .custom((value) => {
      const date_end = parse(value, 'yyyy-MM-dd', new Date());
      
      if (!isValid(date_end)) {
        throw new Error('Data inválida');
      }

      return true;
    }),
];

class StorerulesSyncTheMovieDBRequest {
    async handle(req: Request, res: Response, nextFunction: NextFunction) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }       
        nextFunction();
    }
}

export { rulesSyncTheMovieDBRequest, StorerulesSyncTheMovieDBRequest };