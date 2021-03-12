import { FormWhereParams, IForm } from '../types';

export class FormMapper {
  constructor(private params: FormWhereParams[] = []) {}

  public map(Form: IForm) {
    const { _id } = Form;

    return {
      id: _id,
    };
  }

  public getConditions() {
    const { params } = this;

    return params.length === 0 ? {} : { $or: params };
  }
}
