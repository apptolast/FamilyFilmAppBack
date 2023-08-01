import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

class StatusController {
    async status(req: Request, res: Response, next: NextFunction) {
        res.status(StatusCodes.OK).json({"status":"success","message":"STATUS: OK!"});
    }
}

export default new StatusController();