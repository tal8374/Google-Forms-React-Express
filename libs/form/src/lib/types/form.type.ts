import { Document, Model, ObjectId } from 'mongoose';

export type IForm = {
  _id: ObjectId;
};

export interface FormDocument extends Omit<IForm, '_id'>, Document<ObjectId> {}

export type IFormModel = Model<FormDocument>;

export type FormDTO = {
  id: ObjectId | string;
};

export type FormWhereParams = Partial<FormDTO>;

export type FormCreateParams = Omit<Partial<FormDTO>, 'id'>;
