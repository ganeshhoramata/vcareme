import React, { Component } from 'react';
import { View, Text,ToastAndroid } from 'react-native';
import AboutUscomponent from '../../components/Profile/AboutUscomponent';
export default class AboutUscontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:'',
      title:'',
      image:''
    };
  }

   async componentDidMount(){
    fetch("http://3.138.167.56:3000/page/about",  {
        method: "GET",
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data:responseJson.content});
      this.setState({title:responseJson.title});
      this.setState({image:responseJson.bannerImage[0]});
    })
    .catch(error => {
          ToastAndroid.showWithGravity(
          error.message,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
    });
  }

  backToScreen=()=>{
    this.props.navigation.goBack();
  }

  render() {
    return (
      <AboutUscomponent
       backToScreen={this.backToScreen}
       data={this.state.data}
       title={this.state.title}
       image={this.state.image}
       />
    );
  }
}
