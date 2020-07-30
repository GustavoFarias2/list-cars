import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
const Tabs = createBottomTabNavigator();

import ListRoutes from './list.routes';
import Create from '../pages/create';

type NavigationProps = {
  ListRoutes: undefined,
  Create: undefined,
}

export type AppRouteParamList = {
  navigation: BottomTabNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'ListRoutes' | 'Create'>
}

import { Ionicons } from '@expo/vector-icons';
const returnIcon = (name: string) => () => {
  return {
    tabBarIcon: ({ color }: { color: string }) => (<Ionicons name={name} color={color} size={24} />)
  }
}

class Routes extends React.Component {

  render() {
    return (

      <Tabs.Navigator tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false
      }}>

        <Tabs.Screen
          name="ListRoutes"
          component={ListRoutes}
          options={returnIcon('ios-list')}
        />
        <Tabs.Screen
          name="Create"
          component={Create}
          options={returnIcon('ios-add-circle-outline')}
        />

      </Tabs.Navigator>

    )
  }

}

export default Routes;
