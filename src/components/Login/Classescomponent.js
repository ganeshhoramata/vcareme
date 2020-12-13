import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,StatusBar,Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Modal from 'react-native-modal';
import {DotsLoader} from 'react-native-indicator';

class Classescomponent extends Component {
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
              <TouchableOpacity onPress={()=>this.props.getCetogory(item.id)} style={{alignItems:'center'}}>
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
export default Classescomponent;

// <View style={{flexDirection:'row', width:'100%', justifyContent:'center', alignItems:'center', marginTop: '3%'}}>
//                         <Text style={{opacity: 0.3}}>
//                             --------------------------------------------------
//                         </Text>
//                         <View style={styles.SyllabusSectionHeaderStyling}>
//                             <Text style={styles.SyllabusSectionHeaderTextStyling}>
//                                 State Syllabus
//                             </Text>
//                         </View>
//                         <Text style={{opacity: 0.3}}>
//                             --------------------------------------------------
//                         </Text>
//                 </View>
//                 <View style={styles.SyllabusSectionStyling}>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity onPress={this.props.navigatetoHomeScreen} style={styles.SyllabusTextStyling} >
//                             <Text>
//                                 1st
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity onPress={this.props.navigatetoHomeScreen} style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 2nd
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity onPress={this.props.navigatetoHomeScreen} style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 3rd
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity onPress={this.props.navigatetoHomeScreen} style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 4th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                 </View>
//                 <View style={styles.SyllabussecondSectionStyling}>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling} >
//                             <Text>
//                                 5th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 6th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 7th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 8th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                 </View>
//                 <View style={styles.SyllabussecondSectionStyling}>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling} >
//                             <Text>
//                                 9th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 10th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 LKG
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 UKG
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                 </View>
//                 <View style={{flexDirection:'row', width:'100%', justifyContent:'center', alignItems:'center', marginTop: '3%'}}>
//                         <Text style={{opacity: 0.3}}>
//                             --------------------------------------------------
//                         </Text>
//                         <View style={styles.SyllabusSectionHeaderStyling}>
//                             <Text style={styles.SyllabusSectionHeaderTextStyling}>
//                                 Central Syllabus
//                             </Text>
//                         </View>
//                         <Text style={{opacity: 0.3}}>
//                             --------------------------------------------------
//                         </Text>
//                 </View>
//                 <View style={styles.SyllabusSectionStyling}>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling} >
//                             <Text>
//                                 1st
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 2nd
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 3rd
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 4th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                 </View>
//                 <View style={styles.SyllabussecondSectionStyling}>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling} >
//                             <Text>
//                                 5th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 6th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 7th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 8th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                 </View>
//                 <View style={styles.SyllabussecondSectionStyling}>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling} >
//                             <Text>
//                                 9th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 10th
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 LKG
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 UKG
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                 </View>
//                 <View style={{flexDirection:'row', width:'100%', justifyContent:'center', alignItems:'center', marginTop: '3%'}}>
//                         <Text style={{opacity: 0.3}}>
//                             --------------------------------------------------
//                         </Text>
//                         <View style={styles.SyllabusSectionHeaderStyling}>
//                             <Text style={styles.SyllabusSectionHeaderTextStyling}>
//                                 Exams
//                             </Text>
//                         </View>
//                         <Text style={{opacity: 0.3}}>
//                             --------------------------------------------------
//                         </Text>
//                 </View>
//                 <View style={styles.SyllabusSectionStyling}>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling} >
//                             <Text>
//                                 CAT
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 CET
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 IAS
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 KAS
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                 </View>
                   
//                 <View style={{flexDirection:'row', width:'100%', justifyContent:'center', alignItems:'center', marginTop: '3%'}}>
//                         <Text style={{opacity: 0.3}}>
//                             --------------------------------------------------
//                         </Text>
//                         <View style={styles.SyllabusSectionHeaderStyling}>
//                             <Text style={styles.SyllabusSectionHeaderTextStyling}>
//                                 Sports
//                             </Text>
//                         </View>
//                         <Text style={{opacity: 0.3}}>
//                             --------------------------------------------------
//                         </Text>
//                 </View>
//                 <View style={styles.SyllabusSectionStyling}>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling} >
//                             <Text>
//                                 Yoga
//                             </Text>
//                         </TouchableOpacity>
//                    </View>
//                    <View style={styles.SyllabusHeaderTextStyling}>
//                          <TouchableOpacity style={styles.SyllabusTextStyling}>
//                             <Text>
//                                 Gym
//                             </Text>
//                         </TouchableOpacity>
//                    </View>                   
//                 </View>