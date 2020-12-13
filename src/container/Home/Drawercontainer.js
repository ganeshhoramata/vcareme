import React, {Component} from 'react';
import {View, Text,Alert,AsyncStorage,BackHandler,ToastAndroid} from 'react-native';
import Drawercomponent from '../../components/Home/Drawercomponent';

export default class Drawercontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      userData:'',
      standerd:'',
    };
  }

  componentDidMount(){
    this.getUserDetails();
  }

  async saveKey(sessionToken,userId) {
    try {
      await AsyncStorage.setItem('@sessionToken:key', sessionToken);
      await AsyncStorage.setItem('@userId:key', userId);
    } catch (error) {
       ToastAndroid.showWithGravityAndOffset(
          "Connection failed..! Please try again.",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          0,
          80
      );
    }
    }

  getUserDetails=async()=>{
    this.setState({loading:true})
    const token = await AsyncStorage.getItem('@sessionToken:key');
    fetch("http://3.138.167.56:3000/users/getuserinfo",  {
        method: "POST",
         headers: {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "cache-control": "no-cache"
        }
    })
    .then((response) => response.json().then(data => ({status: response.status, body: data})))
    .then((responseJson) => {
      console.warn(responseJson.status);
      if(responseJson.status==200){
          this.setState({loading:false});
          this.setState({userData:responseJson.body})
          if(responseJson.body.persistedCategory){
            this.setState({standerd:responseJson.body.persistedCategory.display})
          }
        }else{
        fetch("http://3.138.167.56:3000/users/refresh-token",  {
              method: "POST",
              headers: {
                'Authorization': 'Bearer ' + token,
              }
          })
          .then((response) => response.json().then(data => ({status: response.status, body: data})))
          .then((responseJson) => {
             if(responseJson.status==200){
                this.saveKey(responseJson.body.jwtToken,responseJson.body.id);
                this.getUserDetails();
             }else{
                AsyncStorage.removeItem('@sessionToken:key');
                AsyncStorage.removeItem('@userId:key');
                BackHandler.exitApp()
            }
          })
          .catch(error => {
            this.setState({loading:false});
                ToastAndroid.showWithGravityAndOffset(
                error.message,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                  0,
                  80
              );
          });
        }
    })
    .catch(error => {
      this.setState({loading:false});
          ToastAndroid.showWithGravityAndOffset(
          error.message,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
            0,
            80
        );
    });
  }
  navigatetoSubscriptionComponent = () => {
    this.props.navigation.navigate('Subscriptioncontainer');
  };
  navigatetoMyOrderComponent = () => {
    this.props.navigation.navigate('MyOrdercontainer');
  };
  navigatetoNotificationComponent = () => {
    this.props.navigation.navigate('Notificationcontainer');
  };
  navigatetoContactComponent = () => {
    this.props.navigation.navigate('ContactUscontainer');
  };
  navigatetoAboutComponent = () => {
    this.props.navigation.navigate('AboutUscontainer');
  };
  navigatetoTermsandConditionComponent = () => {
    this.props.navigation.navigate('TermsandConditioncontainer');
  };
  navigatetoProfileComponent = () => {
    this.props.navigation.navigate('Profilecontainer');
  };

  handleOnPressLogout=()=>{
        Alert.alert(   
            'Confirmation required'
            ,'Do you really want to logout?'
            ,[
                {text: 'Cancel'},
                {text: 'Logout', onPress: () => { 
                    AsyncStorage.removeItem('@sessionToken:key');
                    AsyncStorage.removeItem('@userId:key');
                    BackHandler.exitApp() }}
            ]
        );
    }

  render() {
    return (
      <Drawercomponent
        navigatetoSubscriptionComponent={this.navigatetoSubscriptionComponent}
        navigatetoMyOrderComponent={this.navigatetoMyOrderComponent}
        navigatetoNotificationComponent={this.navigatetoNotificationComponent}
        navigatetoContactComponent={this.navigatetoContactComponent}
        navigatetoAboutComponent={this.navigatetoAboutComponent}
        navigatetoTermsandConditionComponent={
          this.navigatetoTermsandConditionComponent
        }
        navigatetoProfileComponent={this.navigatetoProfileComponent}
        handleOnPressLogout={this.handleOnPressLogout}
        userData={this.state.userData}
        standerd={this.state.standerd}
      />
    );
  }
}
