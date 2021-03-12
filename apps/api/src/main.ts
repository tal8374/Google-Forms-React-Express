import * as express from 'express';
import { routes } from './routes';

const app = express();

routes.privateRoutes.forEach((route) => {
  app.use('/', route);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
