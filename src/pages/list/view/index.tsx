import React from 'react';

import { ListRouteParams } from '../../../routes/list.routes';

import { View, Text } from 'react-native';

const view: React.FC<ListRouteParams> = ({ route }) => {

  // Destructuring type Car
  const car = route.params;
  const { brand, title, price, age } = car;

  return (
    <View style={{
      flex: 1
    }}>
      <View style={{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00f'
      }}>
        <Text style={{
          fontSize: 28,
          color: '#fff'
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
          fontSize: 32
        }}>
          {title}
        </Text>
        <Text style={{
          fontSize: 32
        }}>
          {age}
        </Text>
      </View>
      <View style={{
        flex: 9,
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <Text>
          Price: 
        </Text>
        <Text>
          {price}
        </Text>
      </View>
    </View>
  )

}

export default view;
