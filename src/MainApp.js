import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {CONFIG_TEST_PARAM} from "./constants/config";
import {actionTest} from "./redux/actions";

const randomString = require('random-string');

class MainApp extends Component<> {
  render() {
    let {params} = this.props.reducerTest;

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

      </View>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    reducerTest: state.reducerTest,
  };
}
export default connect(mapStateToProps, {actionTest})(MainApp);
