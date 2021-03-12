import { Request, Response } from 'express';
import { FormSelector } from '@google-forms/form';

export class FormController {
  getList(req: Request, res: Response) {
    const formSelector = new FormSelector();

    res.status(200).send(formSelector.select());
  }
}
