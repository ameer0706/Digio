import React from 'react';
import {Text, View} from 'react-native';
import Routes from './src/navigation/Routes';
import {Provider} from 'react-redux';
import store from './src/store/store';
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
