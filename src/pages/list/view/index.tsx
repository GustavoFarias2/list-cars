import React from 'react';

import Car from '../../../types/car';

import useFetch from '../../../hooks/useFetch';
import api from '../../../services/api';

import { ListRouteParams } from '../../../routes/list.routes';

import { View, Text, Alert } from 'react-native';
import FloatButton from '../../../components/floatButton/index';

const view: React.FC<ListRouteParams> = ({ navigation, route }) => {

  const carsData = useFetch('cars');
  
  const { data } = carsData.data.filter((car: Car) => car._id === route.params._id);

  const { _id, brand, title, price, age } = data ? data : route.params;

  const handleDelete = () => {
    Alert.alert('Delete', 'Are you sure you want to delete the car?',
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK", onPress: async () => {
            api.delete('cars/' + _id);

            carsData.mutate(carsData.data.filter((car: Car) => car._id !== _id));
            navigation.goBack();
          }
        }
      ],
      { cancelable: false });
  }

  return (
    <View style={{
      flex: 1
    }}>
      <View style={{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006'
      }}>
        <Text style={{
          fontSize: 28,
          color: '#fff',
          fontFamily: 'Montserrat_700Bold'
        }}>
          {brand}
        </Text>
      </View>
      <View style={{
        flex: 9,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
      }}>
        <Text style={{
          fontSize: 32,
          fontFamily: 'Montserrat_400Regular',
          marginBottom: 10,
          textAlign: 'center'
        }}>
          {title + ' '}
          {age}
        </Text>
      </View>
      <View style={{
        flex: 9,
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 22,
          fontFamily: 'Montserrat_400Regular'
        }}>
          {'Price: $' + price}
        </Text>
      </View>

      <FloatButton action={() => { }} color='#006' icon='md-create' containerStyle={{ left: 61, bottom: 10 }} />
      <FloatButton action={handleDelete} color='#006' icon='ios-trash' containerStyle={{ right: 61, bottom: 10 }} />
    </View>
  )

}

export default view;
