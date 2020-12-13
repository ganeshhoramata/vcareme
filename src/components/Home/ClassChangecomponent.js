import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,StatusBar,Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Modal from 'react-native-modal';
import {DotsLoader} from 'react-native-indicator';

class ClassChangecomponent extends Component {
  render() {
    return (
      <View style={styles.container}>
       <StatusBar backgroundColor="#CBA8A1" barStyle="light-content"/> 
        <View>
          <Image source={require('../../assets/3.png')} style={{width:'100%'}}/>
          {this.props.topBanners.length>0 ? <View style={styles.educationimgstyle}>
            <Image
              source={{uri:this.props.topBanners[0]}}
              style={{width: '93%', borderRadius: 4,height:120}}
            />
          </View>:null}
          <View style={styles.otpview}>
                <Text style={styles.otptxt}>
                    {this.props.tittle}
                </Text>
          </View>
        </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <FlatGrid
                itemDimension={140}
                data={this.props.category}
                style={{padding:5,marginTop:'5%'}}
                renderItem={({ item, index }) => (
              <TouchableOpacity onPress={()=>this.props.getCetogory(item.id,false)} style={{alignItems:'center'}}>
                <View style={styles.icon}>
                    <Image source={{uri:item.icon[0]}} style={{width:80,height:80}}/>
                </View>
                <Text style={{fontSize:16,testAlign:'center',color:"#CBA8A1"}}>{item.display}</Text>
               </TouchableOpacity> )}/>
               {this.props.bottomBanners.length>0 ?  <View style={styles.educationimgstyle}>
            <Image
              source={{uri:this.props.bottomBanners[0]}}
              style={{width: '93%', borderRadius: 4,height:120}}
            />
          </View> : null}
            </ScrollView>
         
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
      flex: 1,      
      backgroundColor:'#fff'
    },
    otpview: {
    position: 'absolute',
    top: 40,
    left: 40,
  },
  educationimgstyle: {
    alignItems: 'center',
    marginTop:'2%'
  },
  otptxt: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#3F3830',
  },
    HeaderText1: {
        fontSize: 23,
        color :'#3F3830',
        fontFamily:'europa',
        opacity: 0.7,
        lineHeight: 30,
    },
   icon:{
       width:120,
       height:120,
       backgroundColor:'#fff',
       borderRadius:100,
       elevation:4,
       alignItems:'center',
       justifyContent:'center'
   }
  });
export default ClassChangecomponent;