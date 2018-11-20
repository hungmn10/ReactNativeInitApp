import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/configStore';
import MainApp from './src/MainApp'

export default class App extends Component<> {

  render() {
    return (
      <Provider store={store}>
        <MainApp/>
      </Provider>
    );
  }
}
