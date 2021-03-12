import { FormMapper } from '../mappers';
import { FormRepository } from '../repositories';
import { FormWhereParams } from '../types';

export class FormSelector {
  static async select(params: FormWhereParams[]) {
    return FormRepository.get(new FormMapper(params));
  }
}
