import React, { Component } from 'react';
import { View, Text,AsyncStorage,ToastAndroid } from 'react-native';
import Mathematicscomponent from '../../components/Home/Mathematicscomponent';


export default class Mathematicscontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pid:this.props.navigation.getParam('pid'),
      subName:this.props.navigation.getParam('subName'),
      subIcon:this.props.navigation.getParam('subIcon'),
      category:[],
      loading:false,
      topicCount:''
    };
  }
  navigatetoTrignometryComponent = (topicName,topic,topicNo) => {
    this.props.navigation.navigate('Trignometrycontainer',{subName:this.state.subName,subIcon:this.state.subIcon,topicName,topic,topicNo});
  };
  async componentDidMount(){
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
            "parentId": this.state.pid,
            "level": 2
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
        this.setState({loading:false});
        let cat=responseJson;
        let topicCounts = 0 ;
        for (let i = 0; i < cat.length; i++) {
          let subcat=responseJson[i].subCategory
          topicCounts = topicCounts+subcat.length
          for (let j = 0; j < subcat.length; j++) {
            subcat[j].colorIndex=i;
          }
        }
        this.setState({topicCount:topicCounts})
        this.setState({category:cat});
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

  backToScreen=()=>{
    this.props.navigation.goBack();
  }
  render() {
    return (
      <Mathematicscomponent
       backToScreen={this.backToScreen}
      navigatetoTrignometryComponent={(topicName,topic,topicNo)=>this.navigatetoTrignometryComponent(topicName,topic,topicNo)}
      subName={this.state.subName}
      category={this.state.category}
      subIcon={this.state.subIcon}
      topicCount={this.state.topicCount}
      loading={this.state.loading}
      />
    );
  }
}
