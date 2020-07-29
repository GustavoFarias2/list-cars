import React from 'react';

import { ListRouteParams } from '../../routes/list.routes';
import Car from '../../types/car';

import useFetch from '../../hooks/useFetch';

import { ScrollView, View, ActivityIndicator } from 'react-native';
import styles from './styles';

import CarRow from './carRow/index';

const list: React.FC<ListRouteParams> = ({ navigation }) => {

  const { data } = useFetch('cars');

  const handleClickCar = (car: Car) => navigation.navigate('View', car);

  if (!data)
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size='large' />
      </View>)


  return (
    <View style={styles.flex}>
      <ScrollView style={styles.scroll}>
        {data.map((car: Car) =>
          <CarRow
            key={car._id}
            navigation={navigation}
            car={car}
          />)}
      </ScrollView>
    </View>
  )

}

export default list;
