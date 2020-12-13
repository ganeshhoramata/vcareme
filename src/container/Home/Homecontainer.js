import React, { Component } from 'react';
import { View, Text,AsyncStorage,ToastAndroid } from 'react-native';
import Homecomponent from '../../components/Home/Homecomponent';
import { DrawerActions } from 'react-navigation-drawer';
import { withNavigationFocus } from "react-navigation";

class Homecontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category:[],
      loading:false,
      tittle:'',
      topBanners:[],
      bottomBanners:[],
      selectedSub:false
    };
  }
  componentDidUpdate(prevProps) {
      if (prevProps.isFocused !== this.props.isFocused) {
        this.getdata();
      }
    }
  openDrawer=()=>{
    this.props.navigation.dispatch(DrawerActions.openDrawer())
  }
  navigatetoMathematicsComponent = (pid,subName,subIcon) => {
    if(this.state.selectedSub){
      this.props.navigation.navigate('ClassChangecontainer');
    }else{
      this.props.navigation.navigate('Mathematicscontainer',{pid,subName,subIcon});
    }
  };

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

    componentDidMount(){
      this.getdata()
    }

  async getdata(){
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
            "parentId": "",
            "level": 1
        })
    })
    .then((response) => response.json().then(data => ({status: response.status, body: data})))
    .then((obj) => {
      let responseJson = obj.body;
      if(obj.status==200){
        if(responseJson.message){
          this.setState({loading:false});
          ToastAndroid.showWithGravityAndOffset(
            responseJson.message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
              0,
              80
          );
      }else {
        if(responseJson[0].type=="subject"){
          this.setState({loading:false});
          this.setState({selectedSub:false});
          this.setState({tittle:responseJson[0].title})
          this.setState({topBanners:responseJson[0].topBannerImage})
          this.setState({category:responseJson});
          this.setState({bottomBanners:responseJson[0].bottomBannerImage})
        }else{
          this.setState({loading:false});
          this.setState({selectedSub:true});
          this.props.navigation.navigate('ClassChangecontainer');
        }
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
                this.getdata();
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
  
  render() {
    return (
      <Homecomponent
      openDrawer={this.openDrawer}
      navigatetoMathematicsComponent={(pid,subName,subIcon)=>this.navigatetoMathematicsComponent(pid,subName,subIcon)}
      category={this.state.category}
      loading={this.state.loading}
      tittle={this.state.tittle}
      topBanners={this.state.topBanners}
      bottomBanners={this.state.bottomBanners}
      selectedSub={this.state.selectedSub}
      />
    );
  }
}

export default withNavigationFocus(Homecontainer);