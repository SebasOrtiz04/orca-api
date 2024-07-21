import type { Request, Response } from 'express';
export declare class CustomerController {
    static createCustomer: (req: Request, res: Response) => Promise<void>;
    static getAllCustomers: (req: Request, res: Response) => Promise<void>;
    static getCustomerById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    static updateCustomer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    static deleteCustomer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
