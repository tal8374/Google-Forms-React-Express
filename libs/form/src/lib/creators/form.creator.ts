import { FormRepository } from '../repositories';

export class FormCreator {
  async create() {
    return FormRepository.create();
  }
}
