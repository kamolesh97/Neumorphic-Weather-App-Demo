import React from 'react';
import {LogBox} from 'react-native';
import IndexFile from './src';

export default class App extends React.Component {
  render() {
    // LogBox.ignoreAllLogs(true);
    return <IndexFile />;
  }
}
