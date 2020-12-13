import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Styles,
  Image,StatusBar
} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Button from 'apsl-react-native-button';
import Modal from 'react-native-modal';
import {DotsLoader} from 'react-native-indicator';

export default class OTPcomponent extends Component {

  render() {
    return (
      <View style={styles.container}>
       <StatusBar backgroundColor="#CBA8A1" barStyle="light-content"/> 
        <View>
          <Image source={require('../../assets/3.png')} style={{width:'100%'}}/>
          <View style={styles.otpview}>
            <Text style={styles.otptxt}>OTP Verification</Text>
          </View>
        </View>
        <View style={styles.contentstyle}>
          <Text style={styles.verificationcodestyle}>
            Please type the verification code{' '}
          </Text>
          <Text style={styles.verificationcodestyle}>
            sent to {this.props.mobileNumber.substring(0, 6)}****
          </Text>
          <View style={{marginTop: '25%'}}>
            <SmoothPinCodeInput
              codeLength={4}
              cellSpacing={25}
              cellSize={40}
              cellStyle={{
                borderRadius: 8,
                borderColor: 'transparent',
                backgroundColor: '#ECEBEB',
              }}
              cellStyleFocused={{
                backgroundColor: '#DFC9C4',
              }}
              textStyle={{
                fontSize: 26,
                color: '#000',
              }}
              value={this.props.otp}
              onTextChange={(text) => {
                this.props.onChangeOtp(text);
              }}
            />
          </View>
          <View style={{marginTop: '25%'}}>
            <Text style={styles.didnotcodetxt}>Didn't receive code ?</Text>
          </View>
           <View style={{flexDirection: 'row',justifyContent: 'center',marginTop: '4%'}}>
           { this.props.timer>1 ? <Text style={{
                  textAlign: 'center',
                  color: '#F2314E',
                  fontWeight: 'bold',marginTop:10,marginRight:10
                }}>{' '}0:{this.props.timer}{' '}</Text> :null }
            <TouchableOpacity onPress={this.props.resendOtp} disabled={this.props.timer>1} >
              <Text
                style={this.props.timer>1 ? {
                  textAlign: 'center',
                  color: '#F2314E',
                  fontWeight: 'bold',marginTop:10,opacity:0.5
                } : {
                  textAlign: 'center',
                 color: '#F2314E',
                  fontWeight: 'bold',marginTop:10
                }}>
                Resend
              </Text>
            </TouchableOpacity>
            </View>
        <View style={{marginTop: '20%'}}>
          <Button onPress={this.props.verifyOtp}
            style={styles.btnstyle}
            textStyle={{fontSize: 14, color: '#121212'}}>
            NEXT
          </Button>
        </View>
        </View>
         <Modal isVisible={this.props.loading} backdropOpacity={0.4} animationIn={"fadeIn"} animationOut={'fadeOut'} >
            <View style={{ flex: 1 ,justifyContent:"center",alignItems:'center' }} >
              <DotsLoader color="#CBA8A1" size={20}/>
            </View>
          </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  otpview: {
    position: 'absolute',
    top: 35,
    left: 40,
  },
  otptxt: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#3F3830',
  },
  contentstyle: {
    alignItems: 'center',
    marginTop: '2%',
  },
  verificationcodestyle: {
    color: '#121212',
    fontSize: 16,
  },
  didnotcodetxt: {
    fontSize: 16,
    color: 'black',
  },
  resendcodetxt: {
    textAlign: 'center',
    color: '#F2314E',
    fontSize: 16,
  },
  btnstyle: {
    backgroundColor: '#FFFFFF',
    width: '40%',
    height: 50,
    borderColor:'transparent',
    borderRadius:25,
    elevation:10
  },
});
