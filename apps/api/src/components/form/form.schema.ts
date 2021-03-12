import * as yup from 'yup';

export type CreateFormSchemaBody = {
  title: string;
};

export const createFormSchemaBody = yup.object().shape<CreateFormSchemaBody>({
  title: yup.string().required(),
});

export type UpdateFormSchemaBody = {
  title: string;
};

export const updateFormSchemaBody = yup.object().shape<UpdateFormSchemaBody>({
  title: yup.string().required(),
});

export type UpdateFormSchemaParams = {
  formId: string;
};

export const updateFormSchemaParams = yup
  .object()
  .shape<UpdateFormSchemaParams>({
    formId: yup.string().required(),
  });

export type DeleteFormSchemaParams = {
  formId: string;
};

export const deleteFormSchemaParams = yup
  .object()
  .shape<DeleteFormSchemaParams>({
    formId: yup.string().required(),
  });

export type GetFormSchemaParams = {
  formId: string;
};

export const getFormSchemaParams = yup.object().shape<GetFormSchemaParams>({
  formId: yup.string().required(),
});
