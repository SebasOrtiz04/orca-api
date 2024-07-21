import type { Request, Response } from 'express';
export declare class CategoryController {
    static createCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    static getAllCategories: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    static getCategoryById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
