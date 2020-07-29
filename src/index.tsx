import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const app = () => {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )

}

export default app;
