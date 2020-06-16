import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Detail from './pages/Detail';

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode='none'
        screenOptions={{ cardStyle: { backgroundColor: '#F5F5F5' } }}
      >
        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='Detail' component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
