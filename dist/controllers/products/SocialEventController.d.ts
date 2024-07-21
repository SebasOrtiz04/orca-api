import type { Request, Response } from 'express';
export declare class SocialEventController {
    static createEvent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    static getAllSocialevents: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
