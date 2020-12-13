import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TitleNotificationcomponent from '../../components/Home/TitleNotificationcomponent';

export default class TitleNotificationcontainer extends Component {
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
      <TitleNotificationcomponent
       backToScreen={this.backToScreen}
      />
    );
  }
}
