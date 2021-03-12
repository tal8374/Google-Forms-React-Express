import * as express from 'express';

import { FormController } from '.';

const controller = new FormController();

const router = express.Router();

router.get('/forms', controller.getList);
router.post('/forms', controller.create);

export default router;
