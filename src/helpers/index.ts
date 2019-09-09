import { Request, Response } from 'express';

import { StatusCodes } from '../utils';

export default class Helper {
  public validationError(req: Request, res: Response, error: any) {
    return res.status(StatusCodes.badRequest).json({
      status: 'error',
      response: error.details[0].message,
      message: 'Bad request',
    });
  }
}
