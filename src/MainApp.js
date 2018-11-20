import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import ScreenIntroApp from './components/ScreenIntroApp'
import ScreenMain from './components/ScreenMain'

class MainApp extends Component {
  render() {
    let initScreen = 'ScreenMain'
    let MyScreen = createStackNavigator(
      {
        ScreenIntroApp: {screen: ScreenIntroApp},
        ScreenMain: {screen: ScreenMain},
      }, {
        // headerMode: 'none', // hide tool bar
        initialRouteName: initScreen,
      }
    );

    return (
      <MyScreen/>
    );
  }
}

export default (MainApp);
