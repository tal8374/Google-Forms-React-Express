import { Request, Response } from 'express';
import { FormSelector } from '@google-forms/form';

export class FormController {
  async getList(req: Request, res: Response) {
    const formSelector = new FormSelector();

    const results = await formSelector.select();

    res.status(200).send(results);
  }
}
