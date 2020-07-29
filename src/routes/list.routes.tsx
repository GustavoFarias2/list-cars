import React from 'react';

import Car from '../types/car';

import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp, CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

import List from '../pages/list';
import View from '../pages/list/view';

type NavigationProps = {
  List: undefined,
  View: Car,
}

export type ListRouteParams = {
  navigation: StackNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'List' | 'View'>
}

class ListRoutes extends React.Component {

  render() {
    return (

      <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>

        <Stack.Screen
          name="List"
          component={List}
          options={{ title: 'Cars' }}
        />
        <Stack.Screen
          name="View"
          component={View}
          options={({ route }: ListRouteParams) => { return { title: route.params?.title } }}
        />

      </Stack.Navigator>

    )
  }

}

export default ListRoutes;
