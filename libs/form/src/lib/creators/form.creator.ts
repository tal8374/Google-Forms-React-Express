import { FormMapper } from '../mappers';
import { FormRepository } from '../repositories';
import { FormCreateParams } from '../types';

export class FormCreator {
  static async create(parmas: FormCreateParams) {
    return FormRepository.create(new FormMapper(), parmas);
  }
}
