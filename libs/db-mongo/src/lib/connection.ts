import * as Mongoose from 'mongoose';

const connectMongoDB = async () => {
  return Mongoose.connect(`mongodb://root:example@localhost:27017`, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};

export { connectMongoDB };
