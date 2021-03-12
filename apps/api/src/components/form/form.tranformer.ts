import { FormDTO } from '@google-forms/form';

export class FormTransformer {
  static transform(dto: FormDTO) {
    const { id, createdAt, title } = dto;

    return { id, createdAt, title };
  }
}
