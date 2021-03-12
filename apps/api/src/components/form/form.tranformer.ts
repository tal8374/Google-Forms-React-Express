import { FormDTO } from '@google-forms/form';

export class FormTransformer {
  static transform(dto: FormDTO) {
    const { id } = dto;

    return { id };
  }
}
