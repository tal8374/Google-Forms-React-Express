import { FormMapper } from '../mappers';
import { FormRepository } from '../repositories';

export class FormSelector {
  static async select() {
    return FormRepository.getAll(new FormMapper());
  }
}
