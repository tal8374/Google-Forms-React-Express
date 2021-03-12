import { FormMapper } from '../mappers';
import { FormRepository } from '../repositories';

export class FormsSelector {
  static async select() {
    return FormRepository.getAll(new FormMapper());
  }
}
