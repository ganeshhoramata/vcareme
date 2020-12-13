import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Styles,
  Image,
  TouchableOpacity,Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import {DotsLoader} from 'react-native-indicator';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import HTML from 'react-native-render-html';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class AboutUscomponent extends Component {

  render() {
    return (
      <View style={styles.container}>
        
        <Image
          source={require('../../assets/backgroundimage.png')}
          style={{
            flex: 1,
            resizeMode: 'cover',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />

      {this.props.image ? 
        <Image
          source={{uri:this.props.image}}
          style={{height: 172, width: '100%'}}
        />
         : 
        <Image
          source={require('../../assets/aboutusimg.png')}
          style={{height: 172, width: '100%'}}
        /> }

        <View style={{position: 'absolute', left: 7, top: 3}}>
          <TouchableOpacity  onPress={this.props.backToScreen}s style={styles.iconstyle}>
            <Icon name="chevron-left" size={17} />
          </TouchableOpacity>
        </View>
        <View style={styles.bodytxt}>
          <Text style={styles.titletxt}>{this.props.title ? this.props.title : "About Us"}</Text>
          {this.props.data ?  
                <HTML tagsStyles={{p:{ textAlign: 'justify',backgroundColor:'transparent'}}} baseFontStyle={{color:'#545454',fontSize: 16,backgroundColor:'transparent'}} 
                containerStyle={{backgroundColor:'transparent',marginTop:'2%'}} html={this.props.data} />             
           : <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item justifyContent='center' alignItems="center" marginTop={10}>
          <SkeletonPlaceholder.Item width={screenWidth-20} height={450} borderRadius={10} marginTop={10}/>
        </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder> }
        </View>
         <Modal isVisible={this.props.loading} backdropOpacity={0.8} animationIn={"fadeIn"} animationOut={'fadeOut'} >
            <View style={{ flex: 1 ,justifyContent:"center",alignItems:'center' }} >
              <DotsLoader color="#CBA8A1" size={20}/>
            </View>
          </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconstyle: {
    width: 30,
    borderRadius: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  bodycontent: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  bodyimg: {
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
  },
  bodytxt: {
    padding: 7,
    marginTop: '2%',
  },
  titletxt: {
    fontSize: 15,
    color: '#F2314E',
    fontWeight: 'bold',
  },
  paratxt: {
    color: '#121212',
  },
});
