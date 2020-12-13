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
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import {DotsLoader} from 'react-native-indicator';

export default class Logincomponent extends Component {

  render() {
    return (
      <View style={styles.container}>
       <StatusBar backgroundColor="#CBA8A1" barStyle="light-content"/> 
        <View>
          <Image source={require('../../assets/2.png')} style={{width:'100%'}}/>
          <View style={styles.otpview}>
            <Text style={styles.logintxt}>Login</Text>
          </View>
        </View>
        <View style={styles.contentstyle}>
          <Text style={styles.vcarestyle}>For the best experience </Text>
          <Text style={styles.vcarestyle}>with VCARE</Text>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../../assets/mobile.png')}
              style={styles.ImageStyle}
            />
            <TextInput
              style={{ fontFamily:'RiftSoftDemi',letterSpacing: 2}}
              placeholder="MOBILE NUMBER"
              placeholderTextColor="#1B1C20"
              underlineColorAndroid="transparent"
              keyboardType="numeric"
               maxLength={10}
              value={this.props.mobileNumber}
              onChangeText={text => {
                  this.props.onValueChangeMobileNumber(text);
                }}
            />
          </View>
          <View style={{marginTop: '15%'}}>
            <Button
              onPress={() => this.props.getOtp()}
              style={styles.btnstyle}
              textStyle={{fontSize: 14, color: '#121212',fontFamily:'RiftSoftDemi',letterSpacing: 2}}>
              NEXT
            </Button>
          </View>
        </View>
        <View style={styles.bottomimg}>
          <Image
            source={require('../../assets/12.png')}
            style={{width: '100%', height: 234,opacity:0.7}}
          />
        </View>
        <View style={styles.bottomimgcontentstyle}>
          <Image style={{width:120,height:120}} source={require('../../assets/logo.png')} />
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
  logintxt: {
    fontSize: 24,
    color: '#3F3830',
    fontFamily:'EuropaNuovaBold'
  },
  contentstyle: {
    alignItems: 'center',
    marginTop: '10%',
  },
  vcarestyle: {
    color: '#121212',
    fontSize: 18,
     fontFamily:'EuropaNuovaRegular'
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 25,
    height: 50,
    width: '80%',
    borderRadius: 20,
    margin: 10,
    marginTop: '13%',
  },
  ImageStyle: {
    padding: 10,
  },
  ImageStylebtn: {
    padding: 5,
    // margin: 5,
  },
  btnstyle: {
    backgroundColor: '#FFFFFF',
    width: '40%',
    height: 50,
    borderColor: 'transparent',
    borderRadius: 25,
    elevation: 10,
  },
  bottomimg: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  bottomimgcontentstyle: {
    position: 'absolute',
    bottom: '7%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  ortxtview: {
    borderWidth: 1,
    borderRadius: 30,
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#334856',
  },
});
