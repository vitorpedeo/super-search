import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import {
  OpenSans_400Regular,
  OpenSans_700Bold,
  useFonts,
} from '@expo-google-fonts/open-sans';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='dark-content'
      />
      <Routes />
    </>
  );
}
