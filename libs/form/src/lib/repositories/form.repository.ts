import { FormModel } from '../models';
import { FormCreateParams, FormDTO, IForm } from '../types';
import { Mapper } from '@google-forms/types';

export class FormRepository {
  static async create(
    mapper: Mapper<IForm, FormDTO>,
    parmas: FormCreateParams
  ) {
    const result = await FormModel.create(parmas);

    return mapper.map(result as IForm);
  }

  static async delete(mapper: Mapper<IForm, FormDTO>) {
    return FormModel.deleteMany(mapper.getConditions());
  }

  static async getAll(mapper: Mapper<IForm, FormDTO>) {
    const results = await FormModel.find({});

    return results.map((result) => mapper.map(result as IForm));
  }
}
