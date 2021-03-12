import * as express from 'express';

import { FormController } from '.';

const controller = new FormController();

const router = express.Router();

router.get('/', controller.getList);

export default router;
