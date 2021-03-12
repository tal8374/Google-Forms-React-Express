import { Request, Response } from 'express';
import { FormCreator, FormSelector, FormErasor } from '@google-forms/form';
import { FormTransformer } from './form.tranformer';

export class FormController {
  async getList(req: Request, res: Response) {
    const results = await FormSelector.select();

    res.status(200).send({
      data: results.map((result) => FormTransformer.transform(result)),
    });
  }

  async create(req: Request, res: Response) {
    const result = await FormCreator.create(req.body);

    res.status(200).send({ data: FormTransformer.transform(result) });
  }

  async delete(req: Request, res: Response) {
    const result = await FormErasor.delete([{ id: req.params.formId }]);

    res.status(200).send({ data: result });
  }
}
