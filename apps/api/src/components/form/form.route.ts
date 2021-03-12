import * as express from 'express';
import { FormController, createFormSchemaBody } from '.';
import { runRouteValidator } from '@google-forms/shared';
import {
  deleteFormSchemaParams,
  updateFormSchemaBody,
  updateFormSchemaParams,
} from './form.schema';

const controller = new FormController();

const router = express.Router();

router.get('/forms', controller.getList);

router.post(
  '/forms',
  runRouteValidator({
    body: { schema: createFormSchemaBody },
  }),
  controller.create
);

router.delete(
  '/forms/:formId',
  runRouteValidator({
    params: deleteFormSchemaParams,
  }),
  controller.delete
);

router.patch(
  '/forms/:formId',
  runRouteValidator({
    body: {
      schema: updateFormSchemaBody,
    },
    params: {
      schema: updateFormSchemaParams,
    },
  }),
  controller.update
);

export default router;
