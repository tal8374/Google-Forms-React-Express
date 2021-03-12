import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

type Params = {
  body?: BodyParamsPayload;
  params?: ParamsParamsPayload;
  queryParams?: QueryParamsPayload;
};

type BodyParamsPayload = {
  schema: yup.ObjectSchema<any>;
};

type ParamsParamsPayload = {
  schema: yup.ObjectSchema<any>;
};

type QueryParamsPayload = {
  schema: yup.ObjectSchema<any>;
};

export const runRouteValidator = (params: Params) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await runBodyRouteValidator(req, params.body);

      await runParamsRouteValidator(req, params.params);

      await runQueryParamsRouteValidator(req, params.queryParams);

      next();
    } catch (error) {
      res.status(400).send(error.errors);
    }
  };
};

export const runBodyRouteValidator = async (
  req: Request,
  params?: BodyParamsPayload
) => {
  if (!params?.schema) {
    return;
  }

  req.body = await params.schema.validate(req.body);
};

export const runParamsRouteValidator = async (
  req: Request,
  params: ParamsParamsPayload
) => {
  if (!params?.schema) {
    return;
  }

  req.params = await params.schema.validate(req.params);
};

export const runQueryParamsRouteValidator = async (
  req: Request,
  params: QueryParamsPayload
) => {
  if (!params?.schema) {
    return;
  }

  req.query = await params.schema.validate(req.query);
};
