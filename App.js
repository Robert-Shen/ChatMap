import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import AppNavigation from './src/navigation';
import firebase from 'firebase';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppNavigation />
      </Provider>
    );
  }
}
