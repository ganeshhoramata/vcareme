import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Styles,
  Image,
  TextInput,
  ScrollView,Dimensions
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import WebView from 'react-native-webview'

const screenWidth = Math.round(Dimensions.get('window').width);

export default class Trignometrycomponent extends Component {

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/6.png')}
          style={{position: 'absolute', width: '100%'}}
        />

        <TouchableOpacity  onPress={this.props.backToScreen} style={styles.iconview}>
          <View style={styles.iconstyle}>
            <Icon name="chevron-left" size={17} />
          </View>
        </TouchableOpacity>
        <View style={styles.HeaderView}>
          <Image source={{uri:this.props.subIcon}} style={{width:80,height:80}}/>
          <Text style={styles.HeaderTxt}>{this.props.subName}</Text>
        </View>

        <View style={styles.bodyview}>
          <Text style={styles.ClassesSectionTxt}>{this.props.topicName}</Text>

        <View style={{width:'98%',alignItems:'center',justifyContent:'center',
        alignSelf:'center',
        borderRadius:10,marginTop:'2%'}}>
         {!this.props.loading ? this.props.videoUri ?
        <WebView
   source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" ></iframe>'}}
   style={{marginTop: 20,width:320,height:220}}
/>
        //  <VideoPlayer
        //    source={{ uri:this.props.videoUri }}
        //    ref={(ref) => {
        //      this.player = ref
        //    }}
        //    repeat={false}
        //    resizeMode="cover"
        //    onError={() => {
        //        ToastAndroid.showWithGravityAndOffset(
        //     "Unable to connect with server, please try again later.",
        //     ToastAndroid.SHORT,
        //     ToastAndroid.BOTTOM,
        //     0,
        //     80
        //   );
        //    }}
        //    style={styles.backgroundVideo} >
        //    </VideoPlayer> 
           : null :
           <SkeletonPlaceholder >
           <SkeletonPlaceholder.Item alignItems="center" marginBottom={5} marginTop={5} flexDirection="row">
                    <SkeletonPlaceholder.Item width={screenWidth-20} height={210} borderRadius={2} />
                </SkeletonPlaceholder.Item>
             </SkeletonPlaceholder >  }
          </View>
        
          <View style={{top:'2%',left:'1%'}}>
            <Text style={{color: '#121212', fontSize: 12}}>
              Chapter {this.props.topicNo} |
              <Text
                style={{color: '#121212', fontSize: 12, fontWeight: 'bold'}}>
                {' '}
                {this.props.topic.title}
              </Text>
            </Text>
            <Text style={styles.parataxt}>
              {this.props.topic.description}
            </Text>
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
  HeaderView: {
    position: 'relative',
    alignItems: 'center',
  },
  backgroundVideo: {
   borderRadius:2,
   width:screenWidth-20,height:220
 },
  HeaderTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#121212',
    marginTop: '2%',
  },

  iconstyle: {
    width: '8%',
    borderRadius: 30,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 5,
  },
  ClassesSectionTxt: {
    fontSize: 15,
    color: '#F2314E',
    fontWeight: 'bold',
  },
  bodyview: {
    padding: 10,
    marginTop: '5%',
  },
  parataxt: {
    color: '#121212',
    fontSize: 12,
    marginTop:'2%'
  },
  playicon: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '30%',
    
  },
});
