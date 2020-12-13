import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Styles,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Notificationcomponent extends Component {

  render() {
    return (
      <ScrollView style={styles.container}
        showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
       
          <Image source={require('../../assets/5.png')} 
          style={{width:'100%',position: 'absolute',}}/>
        
        <TouchableOpacity  onPress={this.props.backToScreen} style={styles.iconview}>
          <View style={styles.iconstyle}>
            <Icon name="chevron-left" size={17} />
          </View>
        </TouchableOpacity>
        <View style={styles.notificationtxtview}>
          <Text style={styles.notificationtxt}>Notification</Text>
        </View>
        
     
          <View style={styles.notificationcardstyle}>
          <Icon name="bell-o" color={"#000"} size={100} />
           <Text style={{top:10,fontSize:20}}>No Notifications</Text>
          </View>
         
      </View>
      </ScrollView>
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
  notificationtxtview: {
    position: 'relative',
    top: '1%',
    left: '10%',
  },
  notificationtxt: {
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
  notificationcardstyle: {
    alignItems: 'center',
    marginTop: '65%',
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:'20%',
    opacity:0.2
  },
  notificationcardimgstyle: {
    width: '95%',
    height: 106,
    borderRadius: 4,
  },
  paratxtstyle: {
    fontSize: 8,
    color: '#121212',
  },
  titletxt: {
    fontSize: 15,
    color: '#F2314E',
    fontWeight: 'bold',
  },
  paratxtview: {
    marginTop: '3%',
  },
});

// <TouchableOpacity onPress={this.props.navigatetoTitleNotificationcomponent}>
//           <View>
//             <View style={styles.notificationcardstyle}>
//               <Image
//                 source={require('../../assets/notificationcardpink.png')}
//                 style={styles.notificationcardimgstyle}
//               />
//             </View>

//             <View style={{position: 'absolute', left: '3%', top: '12.5%'}}>
//               <View style={{flexDirection: 'row'}}>
//                 <Image
//                   source={require('../../assets/notificationimg.png')}
//                   style={{height: 112, width: 108}}
//                 />
//                 <View style={styles.paratxtview}>
//                   <Text style={styles.titletxt}>Title of Notification</Text>
//                   <Text style={styles.paratxtstyle}>
//                     Lorem Ipsum is simply dummy text of the printing and
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     typesetting industry. Lorem Ipsum has been the industry's{' '}
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     standard dummy text ever since the 1500s, when an unknown{' '}
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     printer took a galley of type and scrambled it to make a
//                     type
//                   </Text>
//                   <Text style={styles.paratxtstyle}>specimen book.</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//           </TouchableOpacity>
          
//           <View>
//             <View style={styles.notificationcardstyle}>
//               <Image
//                 source={require('../../assets/notificationcardyellow.png')}
//                 style={styles.notificationcardimgstyle}
//               />
//             </View>

//             <View style={{position: 'absolute', left: '3%', top: '12.5%'}}>
//               <View style={{flexDirection: 'row'}}>
//                 <Image
//                   source={require('../../assets/notificationimg.png')}
//                   style={{height: 112, width: 108}}
//                 />
//                 <View style={styles.paratxtview}>
//                   <Text style={styles.titletxt}>Title of Notification</Text>
//                   <Text style={styles.paratxtstyle}>
//                     Lorem Ipsum is simply dummy text of the printing and
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     typesetting industry. Lorem Ipsum has been the industry's{' '}
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     standard dummy text ever since the 1500s, when an unknown{' '}
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     printer took a galley of type and scrambled it to make a
//                     type
//                   </Text>
//                   <Text style={styles.paratxtstyle}>specimen book.</Text>
//                 </View>
//               </View>
//             </View>
//           </View>

//           <View>
//             <View style={styles.notificationcardstyle}>
//               <Image
//                 source={require('../../assets/notificationcardpurple.png')}
//                 style={styles.notificationcardimgstyle}
//               />
//             </View>

//             <View style={{position: 'absolute', left: '3%', top: '12.5%'}}>
//               <View style={{flexDirection: 'row'}}>
//                 <Image
//                   source={require('../../assets/notificationimg.png')}
//                   style={{height: 112, width: 108}}
//                 />
//                 <View style={styles.paratxtview}>
//                   <Text style={styles.titletxt}>Title of Notification</Text>
//                   <Text style={styles.paratxtstyle}>
//                     Lorem Ipsum is simply dummy text of the printing and
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     typesetting industry. Lorem Ipsum has been the industry's{' '}
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     standard dummy text ever since the 1500s, when an unknown{' '}
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     printer took a galley of type and scrambled it to make a
//                     type
//                   </Text>
//                   <Text style={styles.paratxtstyle}>specimen book.</Text>
//                 </View>
//               </View>
//             </View>
//           </View>

//           <View>
//             <View style={styles.notificationcardstyle}>
//               <Image
//                 source={require('../../assets/notificationcardgreen.png')}
//                 style={styles.notificationcardimgstyle}
//               />
//             </View>

//             <View style={{position: 'absolute', left: '3%', top: '12.5%'}}>
//               <View style={{flexDirection: 'row'}}>
//                 <Image
//                   source={require('../../assets/notificationimg.png')}
//                   style={{height: 112, width: 108}}
//                 />
//                 <View style={styles.paratxtview}>
//                   <Text style={styles.titletxt}>Title of Notification</Text>
//                   <Text style={styles.paratxtstyle}>
//                     Lorem Ipsum is simply dummy text of the printing and
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     typesetting industry. Lorem Ipsum has been the industry's{' '}
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     standard dummy text ever since the 1500s, when an unknown{' '}
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     printer took a galley of type and scrambled it to make a
//                     type
//                   </Text>
//                   <Text style={styles.paratxtstyle}>specimen book.</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//           <View>
//             <View style={styles.notificationcardstyle}>
//               <Image
//                 source={require('../../assets/notificationcardblue.png')}
//                 style={styles.notificationcardimgstyle}
//               />
//             </View>

//             <View style={{position: 'absolute', left: '3%', top: '12.5%'}}>
//               <View style={{flexDirection: 'row'}}>
//                 <Image
//                   source={require('../../assets/notificationimg.png')}
//                   style={{height: 112, width: 108}}
//                 />
//                 <View style={styles.paratxtview}>
//                   <Text style={styles.titletxt}>Title of Notification</Text>
//                   <Text style={styles.paratxtstyle}>
//                     Lorem Ipsum is simply dummy text of the printing and
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     typesetting industry. Lorem Ipsum has been the industry's{' '}
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     standard dummy text ever since the 1500s, when an unknown{' '}
//                   </Text>
//                   <Text style={styles.paratxtstyle}>
//                     printer took a galley of type and scrambled it to make a
//                     type
//                   </Text>
//                   <Text style={styles.paratxtstyle}>specimen book.</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
