import React from 'react';

import * as Yup from 'yup';

import { FormHandles } from '@unform/core';

import Car from '../types/car';

async function useValidate(
  formRef: React.MutableRefObject<FormHandles>,
  form: Car,
  data: Car[],
  mutate: any,
  callback: () => void 
) {

  try {

    const schema = Yup.object().shape({
      price: Yup.string().required('The price the car is required to register'),
      age: Yup.string().required('Please insert the age of the car to continue'),
      title: Yup.string().required('The Title of the car is required for the register'),
      brand: Yup.string().required('Please insert the brand to complete the register'),
    });

    await schema.validate(form, { abortEarly: true });

    formRef.current?.reset();

    callback()

  } catch (err) {
    if (err instanceof Yup.ValidationError)
      formRef.current?.setErrors({ [err.path]: err.message });
  };
}

export default useValidate;
