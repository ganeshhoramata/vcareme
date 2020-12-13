import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MyOrdercomponent from '../../components/Home/MyOrdercomponent';
export default class MyOrdercontainer extends Component {
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
     <MyOrdercomponent
      backToScreen={this.backToScreen}/>
    );
  }
}
