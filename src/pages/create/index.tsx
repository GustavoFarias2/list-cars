import React, { useRef } from 'react';

import { AppRouteParamList } from '../../routes/index';
import Car from '../../types/car';

import api from '../../services/api';
import useFetch from '../../hooks/useFetch';

import useValidate from '../../hooks/useValidate';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { View, Text } from 'react-native';
import styles from './styles';

import TextInput from '../../components/inputs/text';
import FloatButton from '../../components/floatButton';

const create: React.FC<AppRouteParamList> = ({ navigation }) => {

  const { data, mutate } = useFetch('cars');

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (form: Car) => {
    useValidate(formRef, form, data, mutate, () => {
      mutate([...data, form], false);
      
      api.post('cars', form);
      navigation.navigate('ListRoutes');
    })
  }

  return (
    <View style={styles.container}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Text style={styles.label}>Cars's Brand</Text>
        <TextInput name="brand" />
        <Text style={styles.label}>Title</Text>
        <TextInput name="title" />
        <Text style={styles.label}>Age</Text>
        <TextInput name="age" type='number' />
        <Text style={styles.label}>Cars's price</Text>
        <TextInput name="price" />
      </Form>

      <FloatButton action={() => formRef.current.submitForm()} iconStyle={styles.icon} />
    </View>
  )

}

export default create;
