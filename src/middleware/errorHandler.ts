import { Response, Request, NextFunction } from "express";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    res.status(500).json({
        success:false,
        data:null,
        msg:error.message || "Server Error."
    })
};

export default errorHandler;
