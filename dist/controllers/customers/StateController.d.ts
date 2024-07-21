import type { Request, Response } from 'express';
export declare class StateController {
    static createState: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    static getCountryStates: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    static getStateById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    static updateState: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    static deleteState: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
