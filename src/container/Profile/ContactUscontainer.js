import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ContactUscomponent from '../../components/Profile/ContactUscomponent';
export default class ContactUscontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ContactUscomponent
       backToScreen={this.backToScreen}/>
    );
  }
}
