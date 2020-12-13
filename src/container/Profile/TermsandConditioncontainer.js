import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TermsandConditioncomponent from '../../components/Profile/TermsandConditioncomponent';


export default class TermsandConditioncontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:'',
      title:''
    };
  }

   async componentDidMount(){
    fetch("http://3.138.167.56:3000/page/tnc",  {
        method: "GET",
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data:responseJson.content});
      this.setState({title:responseJson.title});
    })
    .catch(error => {
          ToastAndroid.showWithGravity(
          error.message,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
    });
  }

  backToScreen=()=>{
    this.props.navigation.goBack();
  }

  render() {
    return (
     <TermsandConditioncomponent
      backToScreen={this.backToScreen}
      data={this.state.data}
       title={this.state.title}
      />
    );
  }
}
