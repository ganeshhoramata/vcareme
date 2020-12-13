import React, { Component } from 'react';
import { View, Text,AsyncStorage,Alert,ToastAndroid } from 'react-native';
import Profilecomponent from '../../components/Profile/Profilecomponent';
import { withNavigationFocus } from "react-navigation";

class Profilecontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      userData:'',
      standerd:'',
      stdIcon:'',
      editAddress:false,
      userAddress:'',
    };
  }

  componentDidMount(){
    this.getUserDetails();
  }

  onValueChangeAddress=(value)=>{
    this.setState({userAddress:value});
  }

  componentDidUpdate(prevProps) {
      if (prevProps.isFocused !== this.props.isFocused) {
        this.getUserDetails();
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
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({loading:false});
      this.setState({userData:responseJson})
      if(responseJson.persistedCategory){
        this.setState({standerd:responseJson.persistedCategory.display})
        this.setState({stdIcon:responseJson.persistedCategory.icon[0]})
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

    navigateToChanegstanderd=()=>{
      this.props.navigation.navigate('ClassChangecontainer');
    }

    SaveAddress=async()=>{
      if(this.state.editAddress){
        this.setState({loading:true})
        const token = await AsyncStorage.getItem('@sessionToken:key');
        fetch("http://3.138.167.56:3000/users/updateuserinfo",  {
            method: "POST",
            headers: {
              'Authorization': 'Bearer ' + token,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              "cache-control": "no-cache"
            },
             body: JSON.stringify({
                "address": this.state.userAddress
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({loading:false});
          this.getUserDetails();
          this.setState({editAddress:false});
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
      }else{
        this.setState({editAddress:true});
      }
    }

  render() {
    return (
      <Profilecomponent
      navigateToChanegstanderd={this.navigateToChanegstanderd}
      userData={this.state.userData}
      loading={this.state.loading}
      standerd={this.state.standerd}
      stdIcon={this.state.stdIcon}
      handleOnPressLogout={this.handleOnPressLogout}
      editAddress={this.state.editAddress}
      onValueChangeAddress={(val)=>this.onValueChangeAddress(val)}
      userAddress={this.state.userAddress}
      SaveAddress={this.SaveAddress}
      />
    );
  }
}

export default withNavigationFocus(Profilecontainer);