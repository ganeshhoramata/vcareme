import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Subscriptioncomponent from '../../components/Home/Subscriptioncomponent';

export default class Subscriptioncontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  backToScreen=()=>{
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Subscriptioncomponent
       backToScreen={this.backToScreen}/>
    );
  }
}
