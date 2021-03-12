import * as Mongoose from 'mongoose';
import { FormSchema } from '../schemas';
import { FormDocument, IFormModel } from '../types';

export const FormModel = Mongoose.model<FormDocument>(
  'Forms',
  FormSchema
) as IFormModel;
