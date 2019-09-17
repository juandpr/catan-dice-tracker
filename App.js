import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import AppNavigation from './src/components/AppNavigation';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}