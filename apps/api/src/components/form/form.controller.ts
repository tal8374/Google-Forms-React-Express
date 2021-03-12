import { Request, Response } from 'express';

export class FormController {
  getList(req: Request, res: Response) {
    res.status(200).send('hello world');
  }
}
