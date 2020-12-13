import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,StatusBar,
  Styles,
  Dimensions,FlatList,Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { FlatGrid } from 'react-native-super-grid';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { SliderBox } from "react-native-image-slider-box";

const screenWidth = Math.round(Dimensions.get('window').width);
export default class Homecomponent extends Component {

  render() {
    return (
      <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="#CBA8A1" barStyle="light-content"/> 
        
      <View style={styles.container}>
       
          <Image source={require('../../assets/Home5.png')}
          style={{width:'100%',position: 'absolute',}}/>
       
       <View style={styles.iconview}>
        <TouchableOpacity 
        onPress={this.props.openDrawer}>
          <View >
             <Image style={{height:30,width:35,left:5}} source={require('../../assets/menu.png')} />
          </View>
        </TouchableOpacity>

         <TouchableOpacity 
       onPress={()=>Linking.openURL('http://vcan.org.in/cms/index.aspx')}>
          <View >
             <Image style={{height:40,width:40,right:5,top:2,borderRadius:100,borderWidth:0.8,borderColor:'#CBA8A1'}} source={require('../../assets/vcan.jpeg')} />
          </View>
        </TouchableOpacity>
        </View>
               
      <View style={styles.educationimgstyle}>
       { this.props.topBanners.length>0 ? 
         <SliderBox
            images={this.props.topBanners}
            autoplay={true}
            circleLoop={true}
            dotColor="transparent"
            inactiveDotColor="transparent"
            ImageComponentStyle={{width: '93%',
            height: 110}}
            />
          :  
           <SkeletonPlaceholder >
          <SkeletonPlaceholder.Item alignItems="center" >
              <SkeletonPlaceholder.Item width={screenWidth-30} height={110} borderRadius={5} />
            </SkeletonPlaceholder.Item> 
          </SkeletonPlaceholder>
          } 
         </View> 
         
          
         {this.props.tittle ?  
         <View style={{padding: 10,marginTop:10}}>
            <Text style={styles.subtxtstyle}>{this.props.tittle}</Text>
          </View> : 
          <SkeletonPlaceholder >
          <SkeletonPlaceholder.Item alignItems="flex-start" marginLeft={20} marginTop={15} marginBottom={10}>
              <SkeletonPlaceholder.Item width={120} height={20} borderRadius={5} />
            </SkeletonPlaceholder.Item> 
          </SkeletonPlaceholder> }
       
          {this.props.category.length>0 ? 
          <FlatGrid
            itemDimension={screenWidth / 3 - 20}
            data={this.props.category}
            renderItem={({ item, index }) => (
            <TouchableOpacity onPress={()=> this.props.navigatetoMathematicsComponent(item.id,item.display,item.icon[0])}>
              <View style={{padding: 2,alignItems:'center',justifyContent:'center'}}>
                <Image
                  source={{uri:item.icon[0]}}
                  style={{height: 64, width: 65}}
                />
                <Text style={styles.imgtxt}>{item.display}</Text>
              </View>
            </TouchableOpacity>
           )}/> : 
           <SkeletonPlaceholder >
                <SkeletonPlaceholder.Item alignItems="center" marginTop={10} flexDirection="row">
                    <SkeletonPlaceholder.Item width={screenWidth / 3 - 30} height={screenWidth / 3 - 30} borderRadius={5} marginLeft={25} />
                    <SkeletonPlaceholder.Item width={screenWidth / 3 - 30} height={screenWidth / 3 - 30} borderRadius={5} marginLeft={20}/>
                     <SkeletonPlaceholder.Item width={screenWidth / 3 - 30} height={screenWidth / 3 - 30} borderRadius={5} marginLeft={20}/>
                </SkeletonPlaceholder.Item> 
                <SkeletonPlaceholder.Item alignItems="center" marginBottom={20} marginTop={20} flexDirection="row">
                    <SkeletonPlaceholder.Item width={screenWidth / 3 - 30} height={screenWidth / 3 - 30} borderRadius={5} marginLeft={25} />
                    <SkeletonPlaceholder.Item width={screenWidth / 3 - 30} height={screenWidth / 3 - 30} borderRadius={5} marginLeft={20}/>
                     <SkeletonPlaceholder.Item width={screenWidth / 3 - 30} height={screenWidth / 3 - 30} borderRadius={5} marginLeft={20}/>
                </SkeletonPlaceholder.Item> 
            </SkeletonPlaceholder> }

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled
            style={{left:10,marginRight:10}}
            data={this.props.bottomBanners}
            extraData={this.props.bottomBanners}
             renderItem={({item, index}) => 
            <View style={{padding:10}}>
              <Image
                source={{uri:item}}
                style={{width:260,height: 97}}
              />
            </View> }
            />
          <View style={{padding: 10,left:5}}>
            <Text style={{color: '#121212', fontSize: 20}}>Question Set</Text>
          </View>
          <LinearGradient
            style={styles.gradientstyle}
            colors={['#31F2EB', '#791976']}>
            <View style={styles.gradientcontentstyle}>
              <View>
                <Image source={require('../../assets/question.png')} />
              </View>
              <View>
                <Text style={{fontSize: 16, color: '#ffffff'}}>
                  {' '}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#ffffff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Coming Soon...
                </Text>
              </View>
            </View>
          </LinearGradient>
        
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  educationimgstyle: {
    marginTop:'12%'
  },
  subtxtstyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '3%',
  },
  subimgstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    
  },
  subimgtxtstyle: {
    fontSize: 16,
    color: '#121212',
    textAlign: 'center',
    top: 4,
  },
  gradientstyle: {
    height: 119,
    width: '92%',
    alignSelf: 'center',
    borderRadius: 4,
    marginBottom:10
  },
  gradientcontentstyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 15,
  },
  iconview: {
    position: 'relative',
    top: '1%',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:5
  },
  iconstyle: {
    width: 30,
    borderRadius: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 5,
  },
  imgtxt: {
    fontSize: 12,
    // fontWeight: 'bold',
    // fontFamily: 'Sofia_Pro_Soft_Medium',
    alignSelf: 'center',
    height:30,
    textAlign:'center',
    top:'5%'
  },
});
