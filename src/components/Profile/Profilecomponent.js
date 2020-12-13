import {Item} from 'native-base';
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,TextInput,Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from "react-native-text-gradient";
import Modal from 'react-native-modal';
import {DotsLoader} from 'react-native-indicator';

export default class Profilecomponent extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
         
            <Image source={require('../../assets/8.png')} 
            style={{position: 'absolute',width:'100%'}}/>
          <View style={styles.HeaderView}>
            <View style={{width: '67%', paddingLeft: '4%'}}>
              <Text style={styles.HeaderTxt}>{this.props.standerd}</Text>
              
              <Text style={styles.HeaderSubTxt}>{this.props.userData.fullName}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginTop: 2,
                }}> 
                {this.props.stdIcon ? <Image
                  source={{uri:this.props.stdIcon}}
                  style={styles.SubIconInd}
                /> : null }
                <TouchableOpacity style={{flexDirection:'row'}} onPress={this.props.navigateToChanegstanderd}>
                <Text style={styles.SubjectGrade}>
                  {this.props.standerd ? this.props.standerd : "Select Standerd"}{'  '}
                </Text>
                <Icon name="sort-down" size={20} style={{color: 'gray',bottom:3}} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.ProfSection}>
            <View style={{width: 103,
    height: 103,
    borderRadius: 100,overflow: 'hidden',alignItems:'center',justifyContent:'center'}}>
              <Image 
                source={require('../../assets/user.png')}
                style={styles.ProfImg}
              />
             </View>
             <TouchableOpacity style={{ position: 'absolute',
    top:0,
    marginLeft: 76,}}>
              <Image
                source={require('../../assets/MarkImg.png')}
                style={styles.ProfIndicatorImg}
              />
              </TouchableOpacity>
            </View>
          </View>
        {  // <View style={styles.ClassesSection}>
          //   <Text style={styles.ClassesSectionTxt}>Status</Text>
          //   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          //     <View style={styles.SujectSection}>
          //       <View style={styles.SujectSectionTopView}>
          //         <Image
          //           source={require('../../assets/Maths.png')}
          //           style={styles.SubectImg}
          //         />
          //       </View>
          //       <View style={styles.SubjectSectionBottomView}>
          //         <Text style={styles.SubjectName}>Trigonometry</Text>
          //         <Text style={styles.SubjectSubName}>102 PAGES</Text>
          //       </View>
          //       <View style={styles.SubjectView}>
          //         <Text style={styles.SubjectCount}>01</Text>
          //       </View>
          //     </View>

          //     <View style={styles.SujectSection}>
          //       <View style={styles.SujectSectionTopView}>
          //         <Image
          //           source={require('../../assets/Maths.png')}
          //           style={styles.SubectImg}
          //         />
          //       </View>
          //       <View style={styles.SubjectSectionBottomView}>
          //         <Text style={styles.SubjectName}>Geometry</Text>
          //         <Text style={styles.SubjectSubName}>102 PAGES</Text>
          //       </View>
          //       <View style={styles.SubjectView}>
          //         <Text style={styles.SubjectCount}>02</Text>
          //       </View>
          //     </View>

          //     <View style={styles.SujectSection}>
          //       <View style={styles.SujectSectionTopView}>
          //         <Image
          //           source={require('../../assets/Maths.png')}
          //           style={styles.SubectImg}
          //         />
          //       </View>
          //       <View style={styles.SubjectSectionBottomView}>
          //         <Text style={styles.SubjectName}>Algebra</Text>
          //         <Text style={styles.SubjectSubName}>102 PAGES</Text>
          //       </View>
          //       <View style={styles.SubjectView}>
          //         <Text style={styles.SubjectCount}>03</Text>
          //       </View>
          //     </View>
          //   </ScrollView>
          // </View>
          }
          <View style={styles.ExtraInfoView}>
            <Item style={{width:'90%',height:40}}>
              <Text style={styles.ExtraInfoText}>{this.props.userData.phoneNumber}</Text>
             
            </Item>
            <Item style={styles.ExtraInfoItem}>
              <Text style={styles.ExtraInfoText}>{this.props.userData.email}</Text>
             
            </Item>
            {this.props.editAddress ? 
            <Item style={styles.ExtraInfoItem}>
              <TextInput
              style={{marginLeft: '4%',width: '85%',}}
              placeholder="Enter address"
              placeholderTextColor="#121212"
              underlineColorAndroid="transparent"
              value={this.props.userAddress}
              onChangeText={text => {
                this.props.onValueChangeAddress(text);
              }}
            />
             <TouchableOpacity onPress={this.props.SaveAddress}>
             <Icon name="check-circle" size={25} style={{color: 'green'}} />
              </TouchableOpacity>
            </Item> : <Item style={styles.ExtraInfoItem}>
              <Text style={styles.ExtraInfoText}>{this.props.userData.address ? this.props.userData.address : "Add address"}</Text>
              <TouchableOpacity onPress={this.props.SaveAddress}>
              <Image
                source={require('../../assets/pen.png')}
                style={styles.PencilStyle}
              />
              </TouchableOpacity>
            </Item> }
            <View style={{marginTop: '5%',flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity 
       onPress={()=>Linking.openURL('http://vcan.org.in/cms/index.aspx')}>
             <Image style={{width:90,height:90}} source={require('../../assets/vcan.jpeg')} />
            </TouchableOpacity>
             <TouchableOpacity 
       onPress={()=>Linking.openURL('http://www.karnatakarakshanapade.com/')}>
             <Image style={{width:90,height:80,marginLeft:10,borderRadius:10}} source={require('../../assets/krplogo.jpg')} />
            </TouchableOpacity>
             <TouchableOpacity 
       onPress={()=>Linking.openURL('https://thenews24.net/')}>
             <Image style={{width:110,height:50,marginLeft:10}} source={require('../../assets/n24.png')} />
              </TouchableOpacity>
            </View>
             <TouchableOpacity onPress={this.props.handleOnPressLogout}>
             <LinearGradient
          style={styles.LogoutTouchable}
          colors={['#602AD7', '#E7063F']}>
              <Text style={styles.LogoutText}>LOGOUT</Text>
            </LinearGradient>
             </TouchableOpacity>
          </View>
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
    backgroundColor: 'white',
  },
  iconview: {
    position: 'relative',
    left: '2%',
    top: '2%',
  },
  HeaderView: {
    position: 'relative',
    marginTop: '13%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ClassesSection: {
    marginTop: '4%',
  },
  ClassesSectionTxt: {
    fontSize: 16,
    color: '#FB2E4C',
    marginTop: 2,
    fontWeight: 'bold',
    paddingLeft: '5%',
  },
  HeaderTxt: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#121212',
  },
  HeaderSubTxt: {
    fontSize: 25,
    color: '#121212',
    marginTop: -3,
    fontWeight: 'bold',
    width:180
  },
  iconstyle: {
    width: '8%',
    borderRadius: 30,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 5,
  },
  SujectSection: {
    flexDirection: 'column',
    padding: 8,
    marginLeft: 4,
  },
  SujectSectionTopView: {
    backgroundColor: '#FED33B',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 137,
    height: 107,
    alignItems: 'center',
    elevation: 5,
  },
  SubectImg: {
    width: 40,
    height: 40,
    marginTop: '13%',
  },
  SubjectSectionBottomView: {
    backgroundColor: '#FFFFFF',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: 137,
    height: 75,
    alignItems: 'center',
    elevation: 5,
    justifyContent: 'center',
  },
  SubjectName: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  SubjectSubName: {
    fontSize: 10,
    color: '#7D8184',
    letterSpacing: 1.5,
    marginTop: 1,
  },
  SubjectView: {
    backgroundColor: '#FFFFFF',
    elevation: 8,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    marginLeft: 50,
    marginTop: 93,
  },
  SubjectCount: {
    color: '#F2314E',
    fontSize: 15,
    fontWeight: 'bold',
  },
  SubIconInd: {
    width: 24,
    height: 24,
  },
  LogoutText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  LogoutTouchable: {
    marginTop: '8%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#E10745',
    width: 315,
    height: 40,
    borderRadius: 6,
    marginBottom:'15%'
  },
  PencilStyle: {
    width: 18,
    height: 18,
  },
  ExtraInfoText: {
    color: '#121212',
    fontSize: 12,
    marginLeft: '5%',
    width: '85%',
  },
  ExtraInfoView: {
    marginTop: '10%',
    alignItems:'center'
  },
  ExtraInfoItem: {
    marginTop: '3%',
    width:'90%',
    height:40
  },
  ProfIndicatorImg: {
    width: 36,
    height: 36,
  },
  ProfImg: {
    width: 123,
    height: 123,
  },
  ProfSection: {
  
  },
  SubjectGrade: {
    fontSize: 16,
    marginLeft: 5,
    color: '#121212',
  },
});
