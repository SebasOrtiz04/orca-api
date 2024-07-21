import type { Request, Response } from 'express';
export declare class CountryController {
    static createCountry: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    static getAllCountries: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    static getCountryById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
