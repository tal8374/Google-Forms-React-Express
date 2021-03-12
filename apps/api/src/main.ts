import * as express from 'express';
import { routes } from './routes';
import { connectMongoDB } from '@google-forms/db-mongo';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

routes.privateRoutes.forEach((route) => {
  app.use('/', route);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');

  connectMongoDB()
    .then(() => {
      console.log('connected to mongo');
    })
    .catch((err) => console.log(err));
});
server.on('error', console.error);
