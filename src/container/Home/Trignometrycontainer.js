import React, { Component } from 'react';
import { View, Text,ToastAndroid } from 'react-native';
import Trignometrycomponent from '../../components/Home/Trignometrycomponent';
export default class Trignometrycontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subName:this.props.navigation.getParam('subName'),
      subIcon:this.props.navigation.getParam('subIcon'),
      topicName:this.props.navigation.getParam('topicName'),
      topicNo:this.props.navigation.getParam('topicNo'),
      topic:this.props.navigation.getParam('topic'),
      videoUri:'',
      loading:false
    };
  }

  componentDidMount(){
     this.setState({loading:true});
     const VIMEO_ID = this.state.topic.url;
      fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
      .then(res => res.json())
      .then(res =>{
        this.setState({videoUri:res.request.files.hls.cdns[res.request.files.hls.default_cdn].url});
        this.setState({loading:false});
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
      <Trignometrycomponent
       backToScreen={this.backToScreen}
       subName={this.state.subName}
       subIcon={this.state.subIcon}
       topicName={this.state.topicName}
       topic={this.state.topic}
       topicNo={this.state.topicNo}
       loading={this.state.loading}
       videoUri={this.state.videoUri}
       />
    );
  }
}
