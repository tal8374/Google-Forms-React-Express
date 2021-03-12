import { FormMapper } from '../mappers';
import { FormRepository } from '../repositories';
import { FormWhereParams } from '../types';

export class FormUpdetor {
  static async update(
    whereParmas: FormWhereParams[],
    updateParmas: FormWhereParams
  ) {
    return FormRepository.update(new FormMapper(whereParmas), updateParmas);
  }
}
