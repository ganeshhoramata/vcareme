import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Chatcomponent from '../../components/Home/Chatcomponent';
export default class Chatcontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Chatcomponent/>
    );
  }
}
