import { query, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

const rulesIndexMovieRequest = [
  query('page')
  .isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('title')
    .optional()
    .isString().withMessage('Title must be a string')
    .isLength({ max: 100 }).withMessage('Title cannot exceed 100 characters')
    
];

class IndexMovieRequest {
    async handle(req: Request, res: Response, nextFunction: NextFunction) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }       
        nextFunction();
    }
}

export { rulesIndexMovieRequest, IndexMovieRequest };