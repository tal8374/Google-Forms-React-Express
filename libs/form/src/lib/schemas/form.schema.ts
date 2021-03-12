import { Schema } from 'mongoose';

const FormSchema = new Schema(
  {
    title: { type: String },
    createdAt: { type: Date, default: new Date() },
  },
  {
    collection: 'Forms',
  }
);
// FormSchema.index({  });

export { FormSchema };
