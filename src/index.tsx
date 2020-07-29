import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular
} from '@expo-google-fonts/montserrat';

import { View, ActivityIndicator } from 'react-native';

import Routes from './routes';
const app = () => {

  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )

}

export default app;
