import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Styles,
  Image,
  TextInput,StatusBar
} from 'react-native';
import Button from 'apsl-react-native-button';
import Modal from 'react-native-modal';
import {DotsLoader} from 'react-native-indicator';

export default class Signupcomponent extends Component {

  render() {
    return (
      <View style={styles.container}>
       <StatusBar backgroundColor="#CBA8A1" barStyle="light-content"/> 
        <View>
          <Image source={require('../../assets/3.png')} style={{width:'100%'}}/>
          <View style={styles.signupview}>
            <Text style={styles.signuptxt}>Signup</Text>
          </View>
        </View>
        <View style={styles.contentstyle}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={{left: '5%'}}
              placeholder="Full Name"
              placeholderTextColor="#6E8CA0"
              underlineColorAndroid="transparent"
              value={this.props.userFullName}
              onChangeText={text => {
                this.props.onValueChangeFullName(text);
              }}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={{left: '5%'}}
              placeholder="Email"
              placeholderTextColor="#6E8CA0"
              underlineColorAndroid="transparent"
               value={this.props.userEmailId}
              onChangeText={text => {
                this.props.onValueChangeEmailId(text);
              }}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={{left: '5%'}}
              placeholder="Address"
              placeholderTextColor="#6E8CA0"
              underlineColorAndroid="transparent"
               value={this.props.userAddress}
              onChangeText={text => {
                this.props.onValueChangeAddress(text);
              }}
            />
          </View>

          <View style={styles.agreeview}>
            <Text style={styles.agreetxt}>
              By Creating an account you agree to our
            </Text>
            <Text style={styles.agreetxt}>
              Terms of Service and Privacy Policy
            </Text>
          </View>
          <View style={{marginTop: '10%'}}>
            <Button
              onPress={this.props.signup}
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
  signupview: {
    position: 'absolute',
    top: 35,
    left: 40,
  },
  signuptxt: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#3F3830',
  },
  contentstyle: {
    alignItems: 'center',
    marginTop: '5%',
  },
  btnstyle: {
    backgroundColor: '#FFFFFF',
    width: '40%',
    height: 50,
    borderColor: 'transparent',
    borderRadius: 25,
    elevation: 10,
  },
  SectionStyle: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderColor: '#C8D1D3',
    borderRadius: 30,
    margin: 10,
  },
  agreetxt: {
    fontSize: 12,
    color: '#121212',
  },
  agreeview: {
    alignItems: 'center',
    marginTop: '10%',
  },
});
