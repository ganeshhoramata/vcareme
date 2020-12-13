import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,SafeAreaView,Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Content,
  Title,
  Footer,
  FooterTab,
  Text,
} from 'native-base';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, withNavigation} from 'react-navigation';
import Homecontainer from './Homecontainer';
import Notificationcontainer from './Notificationcontainer';
import MyOrdercontainer from './MyOrdercontainer';
import Chatcontainer from './Chatcontainer';
import Profilecontainer from '../Profile/Profilecontainer';
import ContactUscontainer from '../Profile/ContactUscontainer';
import AboutUscontainer from '../Profile/AboutUscontainer';
import TermsandConditioncontainer from '../Profile/TermsandConditioncontainer';
import Drawercontainer from '../Home/Drawercontainer';
import Subscriptioncontainer from '../Home/Subscriptioncontainer';
import TitleNotificationcontainer from '../Home/TitleNotificationcontainer';
import Mathematicscontainer from '../Home/Mathematicscontainer';
import Trignometrycontainer from '../Home/Trignometrycontainer';
import ClassChangecontainer from '../Home/ClassChangecontainer'

const FooterTabNavigator = (props) => {
  let currentRouteName = props.navigation.state.routes[props.navigation.state.index].key
  return (
    <SafeAreaView >
        <Button onPress={() => props.navigation.navigate('Homecontainer')}
          style={{ alignSelf: 'center', position: 'absolute', elevation: 10, height: 82, width: 82, bottom: 30, borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 50, backgroundColor: '#FFFFFF', justifyContent: 'center'}} active>
          <View style={{backgroundColor:'#3F3830',height: 60,elevation: 20, width: 60,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
            <Feather active size={24} name="home" style={{ color: "#fff" }} />
          </View>
        </Button>
        <Footer style={{height:70}}>
          <FooterTab style={{backgroundColor:'#CBA8A1'}}>
            <Button onPress={() => props.navigation.navigate('MyOrdercontainer')}>
                <Icon color={currentRouteName == 'MyOrdercontainer' ? "#fff" : "#000"} name="file-text-o"  size={20} />
              <Text style={{top:7,color:currentRouteName == 'MyOrdercontainer' ? "#fff" : "#000",fontSize:12,fontFamily: 'RiftSoftDemi'}}>ORDER</Text>
            </Button>
            <Button onPress={()=>Linking.openURL('https://wa.me/+918926592659')}>
               <Ionicons color={"#000"} name="chatbox-ellipses-outline" size={20} />
           <Text style={{top:7, color :"#000"  ,fontSize:12,fontFamily: 'RiftSoftDemi'}}>CHAT</Text>
            </Button>
            <Button style={{ flex: 0, width: 60 }} onPress={() => props.navigation.navigate('Homecontainer')}>
              
            </Button>
            <Button style={{ flex: 0, width: 90 }} onPress={() => props.navigation.navigate('Notificationcontainer')}>
               <Icon name="bell-o" color={currentRouteName == 'Notificationcontainer' ? "#fff" : "#000"} size={20} />
           <Text style={{top:7,color:currentRouteName == 'Notificationcontainer' ? "#fff" : "#000",fontSize:12,fontFamily: 'RiftSoftDemi'}}>NOTIFICATION</Text>
            </Button>
            <Button onPress={() => props.navigation.navigate('Profilecontainer')}>
          <Feather name="user" color={currentRouteName == 'Profilecontainer' ? "#fff" : "#000"} size={20} />
           <Text style={{top:7,color:currentRouteName == 'Profilecontainer' ? "#fff" : "#000",fontSize:12,fontFamily: 'RiftSoftDemi'}}>PROFILE</Text>
            </Button>
          </FooterTab>
        </Footer>
      </SafeAreaView >
  )
}

const Tabs = createBottomTabNavigator(
  {
    Homecontainer: { screen: Homecontainer },
    Notificationcontainer: { screen: Notificationcontainer },
    MyOrdercontainer:{screen:MyOrdercontainer},
    Chatcontainer:{screen:Chatcontainer},
    Profilecontainer:{screen:Profilecontainer}
  },
  {
    initialRouteName: "Homecontainer",   
    tabBarComponent: props => <FooterTabNavigator {...props} />
  }
)

// const Tabs = createBottomTabNavigator(
//   {
//     Homecontainer: {
//       screen: Homecontainer,
//       navigationOptions: {
//         tabBarLabel: 'HOME',
//         tabBarIcon: ({tintColor}) => (
//           <View>
//             <Icon name="home" style={[{color: tintColor}]} size={22} />
//           </View>
//         ),
//         activeColor: 'green',
//         inactiveColor: 'grey',
//       },
//     },
//     Notificationcontainer: {
//       screen: Notificationcontainer,
//       navigationOptions: {
//         tabBarLabel: 'Notification',
//         tabBarIcon: ({tintColor}) => (
//           <View>
//             <Icon name="bell" style={[{color: tintColor}]} size={22} />
//           </View>
//         ),
//         activeColor: 'green',
//         inactiveColor: 'grey',
//       },
//     },
//     MyOrdercontainer: {
//       screen: MyOrdercontainer,
//       navigationOptions: {
//         tabBarLabel: 'Order',
//         tabBarIcon: ({tintColor}) => (
//           <View>
//             <Icon name="heart-o" style={[{color: tintColor}]} size={22} />
//           </View>
//         ),
//         activeColor: 'green',
//         inactiveColor: 'grey',
//       },
//     },
//     Chatcontainer: {
//       screen: Chatcontainer,
//       navigationOptions: {
//         tabBarLabel: 'Chat',
//         tabBarIcon: ({tintColor}) => (
//           <View>
//             <Icon style={[{color: tintColor}]} size={22} name="address-card" />
//           </View>
//         ),
//         activeColor: 'green',
//         inactiveColor: 'grey',
//       },
//     },
//     Profilecontainer: {
//       screen: Profilecontainer,
//       navigationOptions: {
//         tabBarLabel: 'Profile',
//         tabBarIcon: ({tintColor}) => (
//           <View>
//             <Icon style={[{color: tintColor}]} size={22} name="user" />
//           </View>
//         ),
//         activeColor: 'green',
//         inactiveColor: 'grey',
//       },
//     },
//   },
//   {
//     initialRouteName: 'Homecontainer',
//     barStyle: {backgroundColor: 'green'},
//   },
// );
const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Tabs,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: Drawercontainer,
    drawerWidth: 250,
  },
);
const NavStack = createStackNavigator({
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
  Subscriptioncontainer: {
    screen: Subscriptioncontainer,
    navigationOptions: {
      headerShown: false,
    },
  },
  ContactUscontainer: {
    screen: ContactUscontainer,
    navigationOptions: {
      title: 'ContactUs',
      headerBackImage: () => <Icon name="chevron-left" size={22} />,
      headerStyle: {
        backgroundColor:'#FED33B',
      },
      headerTitleStyle: {
        color: 'black',
        right: 12,
        fontSize: 18,
      },
      headerTintColor: '#fff',
    },
  },
  AboutUscontainer: {
    screen: AboutUscontainer,
    navigationOptions: {
      headerShown: false,
    },
  },
  TermsandConditioncontainer: {
    screen: TermsandConditioncontainer,
    navigationOptions: {
     headerShown: false,
    },
  },
  TitleNotificationcontainer: {
    screen: TitleNotificationcontainer,
    navigationOptions: {
     headerShown: false,
    },
  },
  Mathematicscontainer: {
    screen: Mathematicscontainer,
    navigationOptions: {
     headerShown: false,
    },
  },
  Trignometrycontainer: {
    screen: Trignometrycontainer,
    navigationOptions: {
     headerShown: false,
    },
  },
  ClassChangecontainer: {
    screen: ClassChangecontainer,
    navigationOptions: {
     headerShown: false,
    },
  },
});
const HomeNavigation = createAppContainer(NavStack);
export default HomeNavigation;
