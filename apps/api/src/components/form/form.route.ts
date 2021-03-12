import * as express from 'express';
import * as yup from 'yup';
import { FormController } from '.';
import { runRouteValidator } from '@google-forms/shared';

const controller = new FormController();

const router = express.Router();

router.get('/forms', controller.getList);
router.post(
  '/forms',
  runRouteValidator({
    body: {
      schema: yup.object().shape<any>({
        title: yup.string().required(),
      }),
    },
  }),
  controller.create
);
router.delete(
  '/forms/:formId',
  runRouteValidator({
    params: {
      schema: yup.object().shape<any>({
        title: yup.string().required(),
      }),
    },
  }),
  controller.delete
);
router.patch(
  '/forms/:formId',
  runRouteValidator({
    body: {
      schema: yup.object().shape<any>({
        title: yup.string().required(),
      }),
    },
    params: {
      schema: yup.object().shape<any>({
        title: yup.string().required(),
      }),
    },
  }),
  controller.update
);

export default router;
