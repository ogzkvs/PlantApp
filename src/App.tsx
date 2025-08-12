import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/Stacks/main';
import AppInitializer from './store/initializer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppInitializer>
          <RootNavigator />
        </AppInitializer>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
