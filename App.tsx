import { NavigationContainer } from '@react-navigation/native';
import React, { createRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import MainStackNavigator from './src/navigator/stack-navigator';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const navigationRef = createRef();
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App