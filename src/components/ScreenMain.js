import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {CONFIG_TEST_PARAM} from "../constants/config";
import connect from "react-redux/es/connect/connect";
import {actionTest} from "../redux/actions";

const randomString = require('random-string');

class ScreenMain extends Component {
  render() {
    let {navigation, reducerTest} = this.props;
    let {params} = reducerTest;
    return (
      <View>
        <Text>
          {'Hello this is init project'}
        </Text>
        <Text>
          {CONFIG_TEST_PARAM}
        </Text>
        <Text>
          {params}
        </Text>
        <Button
          title={'Click here'}
          onPress={() => {
            this.props.actionTest(randomString({length: 20}))
          }}
        />
        <Button
          title={'Switch to introduce'}
          onPress={() => {
            navigation.navigate('ScreenIntroApp')
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reducerTest: state.reducerTest,
  };
};
export default connect(mapStateToProps, {actionTest})(ScreenMain);
