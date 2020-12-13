import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Notificationcomponent from '../../components/Home/Notificationcomponent';

export default class Notificationcontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  navigatetoTitleNotificationcomponent = () => {
    this.props.navigation.navigate('TitleNotificationcontainer');
  };

  backToScreen=()=>{
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Notificationcomponent
      navigatetoTitleNotificationcomponent={this.navigatetoTitleNotificationcomponent}
       backToScreen={this.backToScreen}/>
    );
  }
}
