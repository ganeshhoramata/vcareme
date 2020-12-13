import React, { Component } from 'react';
import { View, Text,Keyboard,ToastAndroid } from 'react-native';
import Logincomponent from '../../components/Login/Logincomponent';
export default class Logincontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber:'',
      loading:false
    };
  }

  getOtp=()=>{
    Keyboard.dismiss();
    this.setState({loading:true});
    fetch("http://3.138.167.56:3000/users/sendotp", {
        method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "cache-control": "no-cache"
        },
        body: JSON.stringify({
            "phoneNumber": this.state.mobileNumber
        })
    })
    .then((response) => response.json())
    .then((responseJson) => { 
      this.setState({loading:false});
      if(responseJson.message){
        ToastAndroid.showWithGravityAndOffset(
          responseJson.message,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
            0,
            80
        );
      }else{
        ToastAndroid.showWithGravityAndOffset(
          "OTP send successfully.",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
            0,
            80
        );
        this.props.navigation.navigate('OTPcontainer',{mobileNumber:this.state.mobileNumber})
      }
    })
    .catch(error => {
      this.setState({loading:false});
        ToastAndroid.showWithGravityAndOffset(
          error.message,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
            0,
            80
        );
    });
  }

  // navigatetoOTPScreen=()=>{
  //   this.props.navigation.navigate('OTPcontainer')
  // }

  onValueChangeMobileNumber=(value)=>{
    this.setState({mobileNumber:value})
  }

  render() {
    return (
      <Logincomponent
      mobileNumber={this.state.mobileNumber}
      loading={this.state.loading}
      onValueChangeMobileNumber={(val)=>this.onValueChangeMobileNumber(val)}
      getOtp={this.getOtp}/>
    );
  }
}
