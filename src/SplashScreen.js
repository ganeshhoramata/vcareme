import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Styles,
  Image,StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SplashScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
       <StatusBar backgroundColor="#CBA8A1" barStyle="light-content"/> 
        <Image
          source={require('./assets/10.png')}
          style={{
            flex: 1,
            resizeMode: 'cover',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />

        <View style={styles.logostyle}>
          <Image style={{width:110,height:110}} source={require('./assets/logo.png')} />
           <Text style={styles.txt}>VCARE</Text>
        </View>
        
         
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  logostyle: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: '60%',
  },
  txt: {
    color: '#3F3830',
    fontSize: 76,
     marginTop: '5%',
     fontFamily:'EuropaNuovaBold'
  },
  
  
});
