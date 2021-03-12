import { FormRepository } from '../repositories';

export class FormSelector {
  async select() {
    return FormRepository.getAll();
  }
}
