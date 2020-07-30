import React, { useState, useRef } from 'react';

import Car from '../../../types/car';

import useFetch from '../../../hooks/useFetch';
import api from '../../../services/api';

import useValidate from '../../../hooks/useValidate';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { ListRouteParams } from '../../../routes/list.routes';

import { View, Text, Alert } from 'react-native';
import styles from './styles';

import FloatButton from '../../../components/floatButton/index';
import TextInput from '../../../components/inputs/text/index';

const view: React.FC<ListRouteParams> = ({ navigation, route }) => {

  const formRef = useRef<FormHandles>(null);

  const carsData = useFetch('cars');

  const { data, mutate } = useFetch('cars/' + route.params._id);
  const { brand, title, price, age } = data ? data : route.params;

  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    if (editing) {
      setEditing(false);
      formRef.current.submitForm();
    }
    else
      setEditing(true);
  };

  const handleSubmit = (form) => {
    useValidate(formRef, form, carsData.data, carsData.mutate, () => {
      mutate(form, false);
      carsData.mutate([...carsData.data.filter((car: Car) => car._id !== route.params._id, []), form], false);

      api.put('cars/' + route.params._id, form).catch((e) => console.log(e));
      setEditing(false);
    });
  }

  const handleDelete = () => {
    Alert.alert('Delete', 'Are you sure you want to delete the car?',
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK", onPress: async () => {
            api.delete('cars/' + route.params._id);

            carsData.mutate(carsData.data.filter((car: Car) => car._id !== route.params._id));
            navigation.goBack();
          }
        }
      ],
      { cancelable: false });
  }

  return (
    <View style={styles.container}>
      <Form
        ref={formRef}
        initialData={{ brand, title, price, age: String(age) }}
        onSubmit={handleSubmit}
        style={styles.container}
      >
        <View style={styles.header}>
          {editing ? (
            <TextInput name='brand' placeholder="Car's brand" customStyle={{ marginTop: 15 }} />
          ) : (
              <Text style={styles.brand}>
                {brand}
              </Text>
            )}
        </View>
        <View style={styles.title_container}>
          {editing ? (
            <>
              <View style={styles.title_input_container}>
                <TextInput name='title' placeholder='Title' />
              </View>
              <View style={{ ...styles.age_input_container, ...{ paddingLeft: 10 } }}>
                <TextInput name='age' placeholder="Age" type='number' />
              </View>
            </>
          ) : (
              <Text style={styles.title}>
                {title + ' '}{age}
              </Text>
            )}
        </View>
        <View style={styles.price_container}>
          {editing ? (
            <TextInput name='price' placeholder="Car's Price" />
          ) : (
              <Text style={styles.price}>
                {'Price: $' + price}
              </Text>
            )}
        </View>
      </Form>

      <FloatButton
        action={handleEdit}
        color='#006'
        icon='md-create'
        containerStyle={{ left: 61, bottom: 10 }}
      />
      <FloatButton
        action={handleDelete}
        color='#006'
        icon='ios-trash'
        containerStyle={{ right: 61, bottom: 10 }}
      />
    </View >
  )

}

export default view;
