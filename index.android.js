/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,

} from'react-native';
var MyButtonController = require('./components/MyButtonController');

class FluxTest extends Component{
  constructor(props, context) {
    super(props,context);
  }
  render() {
    return (
      <MyButtonController/>
    );
  }
}

AppRegistry.registerComponent('Test1', () => FluxTest);
