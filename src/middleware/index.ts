import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = require('./schema');
import Helper from '../helpers';

export default class Validate {
  private readonly helper: Helper = new Helper();

  constructor() {
    this.validateRequestBody = this.validateRequestBody.bind(this);
    this.validateRequest = this.validateRequest.bind(this);
  }

  private async validateRequestBody(req: Request): Promise<any> {
    const requestMethods: any = {};
    Object.assign(requestMethods, { method: req.method });
    let validate;
    for (const method in requestMethods) {
      switch (requestMethods[method]) {
        case 'POST':
          if (req.route.path === '/users') {
            validate = await Joi.validate(req.body, schema.register);
          }
          break;
        case 'GET':
          if (req.route.path === '/users/:id') {
            validate = await Joi.validate(req.params, schema.user);
          }
          break;
        default:
      }
    }
    return validate;
  }

  public async validateRequest(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const response = await this.validateRequestBody(req);
      if (response) return next();
    } catch (error) {
      this.helper.validationError(req, res, error);
    }
  }
}
