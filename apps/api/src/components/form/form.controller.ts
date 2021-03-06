import { Request, Response } from 'express';
import {
  FormCreator,
  FormSelector,
  FormErasor,
  FormUpdetor,
  FormsSelector,
} from '@google-forms/form';
import { FormTransformer } from './form.tranformer';
import { CreateFormSchemaBody } from '.';
import {
  DeleteFormSchemaParams,
  GetFormSchemaParams,
  UpdateFormSchemaBody,
  UpdateFormSchemaParams,
} from './form.schema';

export class FormController {
  async get(req: Request, res: Response) {
    const { formId } = req.params as GetFormSchemaParams;

    const result = await FormSelector.select([{ id: formId }]);

    res.status(200).send({
      data: FormTransformer.transform(result),
    });
  }

  async getList(req: Request, res: Response) {
    const results = await FormsSelector.select();

    res.status(200).send({
      data: results.map((result) => FormTransformer.transform(result)),
    });
  }

  async create(req: Request, res: Response) {
    const { title } = req.body as CreateFormSchemaBody;

    const result = await FormCreator.create({ title });

    res.status(200).send({ data: FormTransformer.transform(result) });
  }

  async update(req: Request, res: Response) {
    const { formId } = req.params as UpdateFormSchemaParams;

    const { title } = req.body as UpdateFormSchemaBody;

    const result = await FormUpdetor.update([{ id: formId }], { title });

    res.status(200).send({ data: result });
  }

  async delete(req: Request, res: Response) {
    const { formId } = req.params as DeleteFormSchemaParams;

    const result = await FormErasor.delete([{ id: formId }]);

    res.status(200).send({ data: result });
  }
}
