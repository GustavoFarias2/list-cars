import React, { useRef } from 'react';

import { AppRouteParamList } from '../../routes/index';
import Car from '../../types/car';

import api from '../../services/api';
import useFetch from '../../hooks/useFetch';

import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { View, Text } from 'react-native';
import styles from './styles';

import TextInput from '../../components/inputs/text';
import FloatButton from '../../components/floatButton';

const create: React.FC<AppRouteParamList> = ({ navigation }) => {

  const { data, mutate } = useFetch('cars');

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (form: Car, { reset }) => {
    try {

      const schema = Yup.object().shape({
        price: Yup.string().required('The price the car is required to register'),
        age: Yup.string().required('Please insert the age of the car to continue'),
        title: Yup.string().required('The Title of the car is required for the register'),
        brand: Yup.string().required('Please insert the brand to complete the register'),
      });

      await schema.validate(form, { abortEarly: true });

      api.post('cars', form);
      mutate([...data, form]);
      reset();
      navigation.navigate('ListRoutes');

    } catch (err) {
      if (err instanceof Yup.ValidationError) {

        formRef.current?.setErrors({ [err.path]: err.message });

      }
    };

  }

  return (
    <View style={{
      flex: 1,
      padding: 25,
      paddingTop: 60
    }}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Text style={styles.label}>Cars's Brand</Text>
        <TextInput name="brand" />
        <Text style={styles.label}>Title</Text>
        <TextInput name="title" />
        <Text style={styles.label}>Age</Text>
        <TextInput name="age" />
        <Text style={styles.label}>Cars's price</Text>
        <TextInput name="price" />
      </Form>

      <FloatButton action={() => formRef.current.submitForm()} />
    </View>
  )

}

export default create;
