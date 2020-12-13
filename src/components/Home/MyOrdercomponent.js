import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Styles,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';

export default class MyOrdercomponent extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        
          <Image source={require('../../assets/5.png')} 
          style={{width:'100%',position: 'absolute',}}/>
        
        <TouchableOpacity  onPress={this.props.backToScreen} style={styles.iconview}>
          <View style={styles.iconstyle}>
            <Icon name="chevron-left" size={17} />
          </View>
        </TouchableOpacity>
        <View style={styles.myordertxtview}>
          <Text style={styles.myordertxt}>My Order</Text>
        </View>
        <View style={styles.bodyview}>
          <Image
            source={require('../../assets/9.png')}
            style={{position: 'absolute',opacity:0.6}}
          />
            <View style={styles.notificationcardstyle}>
          <Icon name="file-text-o" color={"#000"} size={80} />
           <Text style={{top:10,fontSize:20}}>No Orders</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
   notificationcardstyle: {
    alignItems: 'center',
    marginTop: '30%',
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:'20%',
    opacity:0.2
  },
  iconview: {
    position: 'relative',
    left: '2%',
    top: '2%',
  },
  myordertxtview: {
    position: 'relative',
    left: '10%',
  },
  myordertxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3F3830',
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
  gradientstyleimg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  imgcontentstyle: {
    position: 'relative',
    top: 10,
    left: 10,
    right: 20,
    paddingHorizontal:10
  },
  syllabuscontentstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  syllabustxtstyle: {
    color: 'white',
    fontSize: 20,
  },
  gradetxtstyle: {
    color: '#FB2E4C',
    fontSize: 16,
  },
  daystxtstyle: {
    color: 'white',
    fontSize: 20,
  },
  paidcontentstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: '1%',
  },
  pricetxtstyle: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  piadtxtstyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  expiretxt: {
    fontSize: 8,
    color: '#FB2E4C',
  },
  btnstyle: {
    backgroundColor: '#FFFFFF',
    width: '55%',
    height: 20,
    borderWidth: 0,
    borderRadius: 12,
    alignSelf: 'flex-end',
  },
  bodyview: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});

// <ScrollView>
//             <View style={{margin: 5,marginTop:'3%'}}>
//               <View style={styles.gradientstyleimg}>
//                 <Image
//                   source={require('../../assets/myorderimg.png')}
//                   style={{width: '98%'}}
//                 />
//               </View>
//               <View style={styles.imgcontentstyle}>
//                 <View style={styles.syllabuscontentstyle}>
//                   <View>
//                     <Text style={styles.syllabustxtstyle}>State Syllabus</Text>
//                     <Text style={styles.gradetxtstyle}>1st Grade</Text>
//                   </View>
//                   <View style={{right: 15}}>
//                     <Text style={styles.daystxtstyle}>15 Days</Text>
//                     <Text style={styles.pricetxtstyle}>1500/-</Text>
//                   </View>
//                 </View>

//                 <View style={styles.paidcontentstyle}>
//                   <View>
//                     <Text style={styles.piadtxtstyle}>
//                       PAID |{' '}
//                       <Text style={styles.expiretxt}>
//                         Expire on 22 July 2021
//                       </Text>
//                     </Text>
//                   </View>
//                   <View style={{right: 15}}>
//                     <Button
//                       style={styles.btnstyle}
//                       textStyle={{fontSize: 10, color: '#121212'}}>
//                       Renew
//                     </Button>
//                   </View>
//                 </View>
//               </View>
//             </View>
//             <View style={{margin: 5,marginTop:'3%'}}>
//               <View style={styles.gradientstyleimg}>
//                 <Image
//                   source={require('../../assets/myorderimg.png')}
//                   style={{width: '98%'}}
//                 />
//               </View>
//               <View style={styles.imgcontentstyle}>
//                 <View style={styles.syllabuscontentstyle}>
//                   <View>
//                     <Text style={styles.syllabustxtstyle}>State Syllabus</Text>
//                     <Text style={styles.gradetxtstyle}>1st Grade</Text>
//                   </View>
//                   <View style={{right: 15}}>
//                     <Text style={styles.daystxtstyle}>15 Days</Text>
//                     <Text style={styles.pricetxtstyle}>1500/-</Text>
//                   </View>
//                 </View>

//                 <View style={styles.paidcontentstyle}>
//                   <View>
//                     <Text style={styles.piadtxtstyle}>
//                       PAID |{' '}
//                       <Text style={styles.expiretxt}>
//                         Expire on 22 July 2021
//                       </Text>
//                     </Text>
//                   </View>
//                   <View style={{right: 15}}>
//                     <Button
//                       style={styles.btnstyle}
//                       textStyle={{fontSize: 10, color: '#121212'}}>
//                       Renew
//                     </Button>
//                   </View>
//                 </View>
//               </View>
//             </View>
            

            
//           </ScrollView>
