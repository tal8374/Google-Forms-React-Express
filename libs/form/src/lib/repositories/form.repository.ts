import { FormModel } from '../models';
import { FormMapper } from '../mappers';
import { IForm } from '../types';

export class FormRepository {
  static async create() {
    await FormModel.create({});
  }

  static async getAll() {
    const results = await FormModel.find({});

    const formMapper = new FormMapper();

    return results.map((result) => formMapper.map(result as IForm));
  }
}
