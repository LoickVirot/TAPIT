import {Request, Response} from "express";

export default class HomeController {
    /**
     * GET /
     * Show hello world
     * @param req Request
     * @param res Response
     */
    public static index(req: Request, res: Response) : void {
        res.send('Hello World');
    }
    
}