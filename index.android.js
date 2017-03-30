import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/components/App';

class CendanaApp extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('CendanaApp', () => CendanaApp);
