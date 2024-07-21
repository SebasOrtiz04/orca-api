import type { Request, Response, NextFunction } from 'express';
export declare function validatePrices(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>>;
export declare function validatePeople(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>>;
export declare const validateCreateSocialEvent: import("express-validator").ValidationChain[];
