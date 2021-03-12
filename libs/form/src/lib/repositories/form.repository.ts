import { FormModel } from '../models';
import { FormCreateParams, FormDTO, FormWhereParams, IForm } from '../types';
import { Mapper } from '@google-forms/shared';

export class FormRepository {
  static async create(
    mapper: Mapper<IForm, FormDTO>,
    parmas: FormCreateParams
  ) {
    const result = await FormModel.create(parmas);

    return mapper.map(result as IForm);
  }

  static async update(
    mapper: Mapper<IForm, FormDTO>,
    updateParmas: FormWhereParams
  ) {
    const result = await FormModel.updateMany(
      mapper.getConditions(),
      updateParmas
    );

    return !!result.ok;
  }

  static async delete(mapper: Mapper<IForm, FormDTO>) {
    return FormModel.deleteMany(mapper.getConditions());
  }

  static async getAll(mapper: Mapper<IForm, FormDTO>) {
    const results = await FormModel.find(mapper.getConditions());

    return results.map((result) => mapper.map(result as IForm));
  }
  static async get(mapper: Mapper<IForm, FormDTO>) {
    const result = await FormModel.findOne(mapper.getConditions());

    if (!result) {
      return null;
    }

    return mapper.map(result as IForm);
  }
}
