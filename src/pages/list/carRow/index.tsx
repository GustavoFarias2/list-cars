import React from 'react';

import Car from '../../../types/car';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type carRowProps = {
  navigation: any,
  car: Car
}

const carRow: React.FC<carRowProps> = ({ navigation, car }) => {

  const handleClickCar = (car: Car) => navigation.navigate('View', car);

  return (
    <View key={car._id} style={styles.car_container}>
      <TouchableOpacity onPress={() => handleClickCar(car)}>
        <Text style={styles.brand}>
          {car.brand}
        </Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.flex}>
            <Text style={styles.title}>
              {car.title}
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.age}>
              {car.age}
            </Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.price}>
              {car.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )

}

export default carRow;
