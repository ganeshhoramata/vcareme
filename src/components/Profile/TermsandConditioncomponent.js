import React, { Component } from 'react';
import { View, Text,StyleSheet,Styles,Image,TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import {DotsLoader} from 'react-native-indicator';
import HTML from 'react-native-render-html';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const screenWidth = Math.round(Dimensions.get('window').width);

export default class TermsandConditioncomponent extends Component {

  render() {
    return (
      <View style={styles.container} >
        <Image
          source={require('../../assets/backgroundimage.png')}
          style={{
            flex: 1,
            resizeMode: 'cover',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
        <TouchableOpacity  onPress={this.props.backToScreen} style={styles.iconview}>
          <View style={styles.iconstyle}>
            <Icon name="chevron-left" size={17} />
          </View>
        </TouchableOpacity>
        <View style={styles.paratxtview}>
          <Text style={styles.titletxt}>{this.props.title ? this.props.title : "Term & Condition"}</Text>
           {this.props.data ?  
                <HTML tagsStyles={{p:{ textAlign: 'justify',backgroundColor:'transparent'}}} baseFontStyle={{color:'#545454',fontSize: 16,backgroundColor:'transparent'}} 
                containerStyle={{backgroundColor:'transparent',marginTop:'2%'}} html={this.props.data} />             
           : <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item justifyContent='center' alignItems="center" marginTop={10}>
          <SkeletonPlaceholder.Item width={screenWidth-20} height={450} borderRadius={10} marginTop={10}/>
        </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder> }
        </View>
        <Modal isVisible={this.props.loading} backdropOpacity={0.8} animationIn={"fadeIn"} animationOut={'fadeOut'} >
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
    flex: 1
  },
   iconview: {
    position: 'relative',
    left: '2%',
    top: '2%',
  },
  iconstyle: {
    width: 30,
    borderRadius: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 5,
  },
  titletxt:{
    fontSize:15,
    fontWeight:'bold',
    color:'#F2314E'
  },
  paratxt:{
    color:'#121212'
  },
  paratxtview:{
    margin:10,
    marginTop:'10%'
  }
});
