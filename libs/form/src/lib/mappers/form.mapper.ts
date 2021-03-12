import { FormWhereParams, IForm, FormDTO } from '../types';
import { Mapper } from '@google-forms/types';

export class FormMapper implements Mapper<IForm, FormDTO> {
  constructor(private params: FormWhereParams[] = []) {}

  public map(Form: IForm) {
    const { _id } = Form;

    return {
      id: _id,
    };
  }

  public getConditions() {
    const { params } = this;

    return params.length === 0
      ? {}
      : { $or: params.map(({ id, ...rest }) => ({ _id: id, ...rest })) };
  }
}
