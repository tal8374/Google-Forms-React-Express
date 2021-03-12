import { FormMapper } from '../mappers';
import { FormRepository } from '../repositories';
import { FormWhereParams } from '../types';

export class FormErasor {
  static async delete(parmas: FormWhereParams[]) {
    return FormRepository.delete(new FormMapper(parmas));
  }
}
