import { Request, Response } from 'express';

import { StatusCodes } from '../utils';
import { Contact } from '../models';


export default class AppController {
  public home(req: Request, res: Response) {
    res.status(StatusCodes.success).json({
      Home: 'Welcome to TypeScript API',
      success: true,
    });
  }

  public async get(req: Request, res: Response): Promise<any> {
    try {
      const users = await Contact.find({});
      res.status(StatusCodes.success).json({
        res: users,
        success: true,
      });
    } catch (e) {
      res.status(StatusCodes.failed).json({
        error: e,
        success: false,
      });
    }
  }

  public async post(req: Request, res: Response): Promise<any> {
    try {
      const newContact: any = new Contact(req.body);
      const contact = await newContact.save();
      res.status(StatusCodes.success).json({
        res: contact,
        success: true,
      });
    } catch (err) {
      res.status(StatusCodes.failed).json({
        error: err,
        success: false,
      });
    }
  }

  public patch(req: Request, res: Response): void {
    res.status(StatusCodes.success).json({
      PATCH: 'PATCH REQUEST IS SUCCESSFUL',
      success: true,
    });
  }

  public async getAuser(req: Request, res: Response): Promise<any> {
    try {
      const user = await Contact.findById({ _id: req.params.id.trim() });
      res.status(StatusCodes.success).json({
        res: user,
        success: true,
      });
    } catch (e) {
      res.status(StatusCodes.failed).json({
        error: e,
        success: false,
      });
    }
  }
}
