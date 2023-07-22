import { NavigationContainer } from '@react-navigation/native';
import React, { createRef } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import MainStackNavigator from './src/navigator/stack-navigator';

const App = () => {
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