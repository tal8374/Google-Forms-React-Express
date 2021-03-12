import { Document, Model, ObjectId } from 'mongoose';

export type IForm = {
  _id: ObjectId;
  title: string;
  createdAt: Date;
};

export interface FormDocument extends Omit<IForm, '_id'>, Document<ObjectId> {}

export type IFormModel = Model<FormDocument>;

export type FormDTO = {
  id: ObjectId | string;
  title: string;
  createdAt: Date;
};

export type FormWhereParams = Partial<FormDTO>;

export type FormCreateParams = Omit<Partial<FormDTO>, 'id'>;
