import type { Request, Response, NextFunction } from 'express';
import { ICountry } from '../../models/customer/Country';
declare global {
    namespace Express {
        interface Request {
            country: ICountry;
        }
    }
}
export declare function validateProjectExists(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
