import React, { Component } from 'react';
import { View, Text,ToastAndroid,AsyncStorage } from 'react-native';
import Signupcomponent from '../../components/Login/Signupcomponent';
export default class Signupcontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber:this.props.navigation.getParam('mobileNumber'),
       userFullName:'',
       userEmailId:'',
       userAddress:'',
       loading:false
    };
  }

  onValueChangeFullName=(value)=>{
    this.setState({userFullName:value})
  }

  onValueChangeEmailId=(value)=>{
    this.setState({userEmailId:value});
  }

  onValueChangeAddress=(value)=>{
    this.setState({userAddress:value});
  }

  async saveKey(sessionToken,userId) {
    try {
      await AsyncStorage.setItem('@sessionToken:key', sessionToken);
      await AsyncStorage.setItem('@userId:key', userId);
      this.props.navigation.navigate('Classescontainer')
    } catch (error) {
       ToastAndroid.showWithGravityAndOffset(
          "Connection failed..! Please try again.",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          0,
          80
      );
    }
    }

  signup=async()=>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.userEmailId) === false ) {
      ToastAndroid.showWithGravityAndOffset(
            "Enter valid email Id",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            0,
            80
          );
    }else{
    this.setState({loading:true});
    const token = await AsyncStorage.getItem('@sessionToken:key');
    fetch("http://3.138.167.56:3000/users/signup", {
        method: "POST",
          headers: {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "cache-control": "no-cache"
        },
        body: JSON.stringify({
            "phoneNumber": this.state.mobileNumber,
            "email": this.state.userEmailId,
            "fullName": this.state.userFullName,
            "address": this.state.userAddress
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
      }else {
        ToastAndroid.showWithGravityAndOffset(
          "Signup successfull.",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
            0,
            80
        );
        this.saveKey(responseJson.jwtToken,responseJson.id);
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
  }

  render() {
    return (
      <Signupcomponent
      signup={this.signup}
      userFullName={this.state.userFullName}
      userEmailId={this.state.userEmailId}
      userAddress={this.state.userAddress}
      onValueChangeFullName={(val)=>this.onValueChangeFullName(val)}
      onValueChangeEmailId={(val)=>this.onValueChangeEmailId(val)}
      onValueChangeAddress={(val)=>this.onValueChangeAddress(val)}
      loading={this.state.loading}
      />
    );
  }
}
