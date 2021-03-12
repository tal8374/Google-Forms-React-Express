import { Schema } from 'mongoose';

const FormSchema = new Schema(
  {},
  {
    collection: 'Forms',
  }
);
// FormSchema.index({  });

export { FormSchema };
