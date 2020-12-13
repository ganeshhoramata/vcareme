import React, { Component } from 'react';
import { View, Text,AsyncStorage,ToastAndroid } from 'react-native';
import Classescomponent from '../../components/Login/Classescomponent';

export default class Classescontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category:[],
      loading:false,
      tittle:'',
      topBanners:[],
      bottomBanners:[]
    };
  }

  navigatetoHomeScreen=()=>{
    this.props.navigation.navigate('HomeNavigation')
  }

  componentDidMount(){
    this.getCetogory("");
  }

  saveKey=async(parentId)=>{
    const token = await AsyncStorage.getItem('@sessionToken:key');
    fetch("http://3.138.167.56:3000/category/persistcategory",  {
        method: "POST",
         headers: {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "cache-control": "no-cache"
        },
        body: JSON.stringify({
            "categoryId": parentId,
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({loading:false});
      this.props.navigation.navigate('HomeNavigation');
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

  getCetogory=async(parentId)=>{
    this.setState({loading:true});
    const token = await AsyncStorage.getItem('@sessionToken:key');
    fetch("http://3.138.167.56:3000/category/get",  {
        method: "POST",
         headers: {
          'Authorization': 'Bearer ' + token,
           'Accept': 'application/json',
            'Content-Type': 'application/json',
            "cache-control": "no-cache"
        },
        body: JSON.stringify({
            "parentId": parentId,
            "level": 1
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({loading:false});
      if(responseJson.message){
        ToastAndroid.showWithGravityAndOffset(
          responseJson.message,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
            0,
            80
        );
      }else {
        if(responseJson.length > 0){
          if(responseJson[0].type=="subject"){
          this.saveKey(parentId);
        }else{
          this.setState({loading:false});
          this.setState({tittle:responseJson[0].title})
          this.setState({topBanners:responseJson[0].topBannerImage})
          this.setState({category:responseJson});
          this.setState({bottomBanners:responseJson[0].bottomBannerImage})
        }
        }else{
          ToastAndroid.showWithGravityAndOffset(
            "Comming soon..",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
              0,
              80
          );
        }
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

  render() {
    return (
     <Classescomponent
     navigatetoHomeScreen={this.navigatetoHomeScreen}
     category={this.state.category}
     tittle={this.state.tittle}
     getCetogory={(parentId)=>this.getCetogory(parentId)}
     loading={this.state.loading}
     topBanners={this.state.topBanners}
     bottomBanners={this.state.bottomBanners}
     />
    );
  }
}
