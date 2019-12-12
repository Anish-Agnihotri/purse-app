import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Screens
import GetStarted from './src/screens/unauthenticated/GetStarted'
import Register from './src/screens/unauthenticated/Register'

const App = createSwitchNavigator(
  {
    GetStarted,
    Register
  },
  {
    initialRouteName: 'GetStarted',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(App);
