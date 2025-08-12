import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/Stacks/main';
import AppInitializer from './store/initializer';
import { StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>    
        <StatusBar barStyle="dark-content" backgroundColor="#000000" />
        <AppInitializer>
          <RootNavigator />
        </AppInitializer>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
