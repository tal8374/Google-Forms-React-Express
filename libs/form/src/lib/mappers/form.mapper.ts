import { FormWhereParams, IForm, FormDTO } from '../types';
import { Mapper } from '@google-forms/shared';

export class FormMapper implements Mapper<IForm, FormDTO> {
  constructor(private params: FormWhereParams[] = []) {}

  public map(Form: IForm) {
    const { _id, createdAt, title } = Form;

    return {
      id: _id,
      createdAt,
      title,
    };
  }

  public getConditions() {
    const { params } = this;

    return params.length === 0
      ? {}
      : { $or: params.map(({ id, ...rest }) => ({ _id: id, ...rest })) };
  }
}
