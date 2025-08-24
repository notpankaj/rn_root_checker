import RootStack from './app/navigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { COLORS } from './app/styles';
import React from 'react';
import { StatusBar } from 'react-native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};
function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer theme={MyTheme}>
        <RootStack />
      </NavigationContainer>
    </React.Fragment>
  );
}

export default App;
