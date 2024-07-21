import type { Request, Response, NextFunction } from 'express';
import { ICategory } from '../../models/products/Category';
declare global {
    namespace Express {
        interface Request {
            category: ICategory;
        }
    }
}
export declare function validateCategory(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
export declare const validateCreateCategory: import("express-validator").ValidationChain[];
