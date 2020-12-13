import React, { Component } from 'react';
import { View, Text,Keyboard,ToastAndroid,AsyncStorage } from 'react-native';
import OTPcomponent from '../../components/Login/OTPcomponent';

export default class OTPcontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp:'',
      mobileNumber:this.props.navigation.getParam('mobileNumber'),
      timer: 30,
      loading:false
    };
  }

  componentDidMount(){
    this.timerCount();
  }

  timerCount=()=>{
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
  }

  componentDidUpdate(){
    if(this.state.timer === 1){ 
      clearInterval(this.interval);
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

   async saveKey(sessionToken,userId) {
    try {
      await AsyncStorage.setItem('@sessionToken:key', sessionToken);
      await AsyncStorage.setItem('@userId:key', userId);
      this.props.navigation.navigate('HomeNavigation')
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

  verifyOtp=()=>{
    Keyboard.dismiss();
    this.setState({loading:true});
    fetch("http://3.138.167.56:3000/users/verifyotp", {
        method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "cache-control": "no-cache"
        },
        body: JSON.stringify({
            "phoneNumber": this.state.mobileNumber,
            "otp": this.state.otp 
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
      }else if(responseJson.otpValid){
        ToastAndroid.showWithGravityAndOffset(
          "OTP verified successfully.",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
            0,
            80
        );
        this.props.navigation.navigate('Signupcontainer',{mobileNumber:this.state.mobileNumber})
      }else{
        ToastAndroid.showWithGravityAndOffset(
          "Login successfull.",
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

  onChangeOtp = text => {
    this.setState({otp: text});
  };

  resendOtp=()=>{
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

  render() {
    return (
      <OTPcomponent
      otp={this.state.otp}
      onChangeOtp={(text)=>this.onChangeOtp(text)}
      mobileNumber={this.state.mobileNumber}
      verifyOtp={this.verifyOtp}
      timer={this.state.timer}
      resendOtp={this.resendOtp}
      loading={this.state.loading}
      />
    );
  }
}
