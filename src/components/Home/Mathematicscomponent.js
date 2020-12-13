import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Styles,
  Image,
  TextInput,
  ScrollView,FlatList,Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const screenWidth = Math.round(Dimensions.get('window').width);
export default class Mathematicscomponent extends Component {

  render() {
    return (
      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <Text style={styles.HeaderSubTxt}>{this.props.category.length} Chapters | {this.props.topicCount} Topics</Text>
          </View>
         
          {this.props.loading ?  
          <SkeletonPlaceholder >
                <SkeletonPlaceholder.Item alignItems="center" marginTop={30} flexDirection="row">
                    <SkeletonPlaceholder.Item width={120} height={20} borderRadius={5} marginLeft={20} />
                </SkeletonPlaceholder.Item> 
                <SkeletonPlaceholder.Item alignItems="center" marginBottom={20} marginTop={20} flexDirection="row">
                    <SkeletonPlaceholder.Item width={130} height={170} borderRadius={5} marginLeft={20} />
                   <SkeletonPlaceholder.Item width={130} height={170} borderRadius={5} marginLeft={20} />
                   <SkeletonPlaceholder.Item width={130} height={170} borderRadius={5} marginLeft={20} />
                </SkeletonPlaceholder.Item> 
                 <SkeletonPlaceholder.Item alignItems="center" marginTop={15} flexDirection="row">
                    <SkeletonPlaceholder.Item width={120} height={20} borderRadius={5} marginLeft={20} />
                </SkeletonPlaceholder.Item> 
                <SkeletonPlaceholder.Item alignItems="center" marginBottom={20} marginTop={20} flexDirection="row">
                    <SkeletonPlaceholder.Item width={130} height={170} borderRadius={5} marginLeft={20} />
                   <SkeletonPlaceholder.Item width={130} height={170} borderRadius={5} marginLeft={20} />
                   <SkeletonPlaceholder.Item width={130} height={170} borderRadius={5} marginLeft={20} />
                </SkeletonPlaceholder.Item> 
                
            </SkeletonPlaceholder>
          : <FlatList
            data={this.props.category}
            extraData={this.props.category}
             renderItem={({item, index}) => 
          <View style={styles.ClassesSection}>
            <Text style={styles.ClassesSectionTxt}>{item.display}</Text>
            <FlatList 
            horizontal 
            showsHorizontalScrollIndicator={false}
            data={item.subCategory}
            extraData={item.subCategory}
             renderItem={({item, index}) => 
            <TouchableOpacity onPress={()=>this.props.navigatetoTrignometryComponent(item.display,item.attachments[0],index+1)}>
              <View style={styles.SujectSection}>
                <View style={ item.colorIndex%3 == 0 ? styles.SujectSectionTopView : item.colorIndex%3==1 ? styles.SujectSectionTopView2 : styles.SujectSectionTopView3}>
                  <Image
                     source={{uri:item.icon[0]}}
                    style={styles.SubectImg}
                  />
                </View>
                <View style={styles.SubjectSectionBottomView}>
                  <Text style={styles.SubjectName}>{item.display}</Text>
                  <Text style={styles.SubjectSubName}>{item.attachments.length} PAGES</Text>
                </View>
                <View style={styles.SubjectView}>
                  <Text style={styles.SubjectCount}>{index+1}</Text>
                </View>
              </View>
            </TouchableOpacity>
              }/>
          </View> 
          } /> }
          </ScrollView>
      </View>
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
    marginTop: '2%',
    alignItems: 'center',
  },
  ClassesSection: {
    marginTop: '4%',
  },
  ClassesSectionTxt: {
    fontSize: 16,
    color: '#121212',
    marginTop: 2,
    fontWeight: 'bold',
    paddingLeft: '7%',
  },
  HeaderTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#121212',
    marginTop: '2%',
  },
  HeaderSubTxt: {
    fontSize: 12,
    color: '#121212',
    marginTop: 2,
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
  notificationcardstyle: {
    alignItems: 'center',
    marginTop: '5%',
    flex: 1,
  },
  notificationcardimgstyle: {
    width: '95%',
    height: 106,
    borderRadius: 4,
  },
  paratxtstyle: {
    fontSize: 8,
    color: '#121212',
  },
  titletxt: {
    fontSize: 15,
    color: '#F2314E',
    fontWeight: 'bold',
  },
  paratxtview: {
    marginTop: '3%',
  },
  SujectSection: {
    flexDirection: 'column',
    padding: 8,
    marginLeft: 4,
  },
  SujectSectionTopView: {
    backgroundColor: '#FED33B',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 137,
    height: 107,
    alignItems: 'center',
    elevation: 5,
  },
  SubectImg: {
    width: 40,
    height: 40,
    marginTop: '13%',
  },
  SubjectSectionBottomView: {
    backgroundColor: '#FFFFFF',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: 137,
    height: 75,
    alignItems: 'center',
    elevation: 5,
    justifyContent: 'center',
  },
  SubjectName: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  SubjectSubName: {
    fontSize: 10,
    color: '#7D8184',
    letterSpacing: 1.5,
    marginTop: 1,
  },
  SubjectView: {
    backgroundColor: '#FFFFFF',
    elevation: 8,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    marginLeft: 50,
    marginTop: 93,
  },
  SubjectCount: {
    color: '#F2314E',
    fontSize: 15,
    fontWeight: 'bold',
  },
  SujectSectionTopView2: {
    backgroundColor: '#F2314E',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 137,
    height: 107,
    alignItems: 'center',
    elevation: 5,
  },
  SujectSectionTopView3: {
    backgroundColor: '#936D90',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 137,
    height: 107,
    alignItems: 'center',
    elevation: 5,
  },
  ClassesSection2: {
    marginTop: '4%',
    marginBottom: '8%',
  },
});


// <View style={styles.ClassesSection}>
//             <Text style={styles.ClassesSectionTxt}>Chapter Name</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               <View style={styles.SujectSection}>
//                 <View style={styles.SujectSectionTopView2}>
//                   <Image
//                     source={require('../../assets/Maths.png')}
//                     style={styles.SubectImg}
//                   />
//                 </View>
//                 <View style={styles.SubjectSectionBottomView}>
//                   <Text style={styles.SubjectName}>Trigonometry</Text>
//                   <Text style={styles.SubjectSubName}>102 PAGES</Text>
//                 </View>
//                 <View style={styles.SubjectView}>
//                   <Text style={styles.SubjectCount}>01</Text>
//                 </View>
//               </View>

//               <View style={styles.SujectSection}>
//                 <View style={styles.SujectSectionTopView2}>
//                   <Image
//                     source={require('../../assets/Maths.png')}
//                     style={styles.SubectImg}
//                   />
//                 </View>
//                 <View style={styles.SubjectSectionBottomView}>
//                   <Text style={styles.SubjectName}>Geometry</Text>
//                   <Text style={styles.SubjectSubName}>102 PAGES</Text>
//                 </View>
//                 <View style={styles.SubjectView}>
//                   <Text style={styles.SubjectCount}>02</Text>
//                 </View>
//               </View>

//               <View style={styles.SujectSection}>
//                 <View style={styles.SujectSectionTopView2}>
//                   <Image
//                     source={require('../../assets/Maths.png')}
//                     style={styles.SubectImg}
//                   />
//                 </View>
//                 <View style={styles.SubjectSectionBottomView}>
//                   <Text style={styles.SubjectName}>Algebra</Text>
//                   <Text style={styles.SubjectSubName}>102 PAGES</Text>
//                 </View>
//                 <View style={styles.SubjectView}>
//                   <Text style={styles.SubjectCount}>03</Text>
//                 </View>
//               </View>
//             </ScrollView>
//           </View>

//           <View style={styles.ClassesSection2}>
//             <Text style={styles.ClassesSectionTxt}>Chapter Name</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               <View style={styles.SujectSection}>
//                 <View style={styles.SujectSectionTopView3}>
//                   <Image
//                     source={require('../../assets/Maths.png')}
//                     style={styles.SubectImg}
//                   />
//                 </View>
//                 <View style={styles.SubjectSectionBottomView}>
//                   <Text style={styles.SubjectName}>Trigonometry</Text>
//                   <Text style={styles.SubjectSubName}>102 PAGES</Text>
//                 </View>
//                 <View style={styles.SubjectView}>
//                   <Text style={styles.SubjectCount}>01</Text>
//                 </View>
//               </View>

//               <View style={styles.SujectSection}>
//                 <View style={styles.SujectSectionTopView3}>
//                   <Image
//                     source={require('../../assets/Maths.png')}
//                     style={styles.SubectImg}
//                   />
//                 </View>
//                 <View style={styles.SubjectSectionBottomView}>
//                   <Text style={styles.SubjectName}>Geometry</Text>
//                   <Text style={styles.SubjectSubName}>102 PAGES</Text>
//                 </View>
//                 <View style={styles.SubjectView}>
//                   <Text style={styles.SubjectCount}>02</Text>
//                 </View>
//               </View>

//               <View style={styles.SujectSection}>
//                 <View style={styles.SujectSectionTopView3}>
//                   <Image
//                     source={require('../../assets/Maths.png')}
//                     style={styles.SubectImg}
//                   />
//                 </View>
//                 <View style={styles.SubjectSectionBottomView}>
//                   <Text style={styles.SubjectName}>Algebra</Text>
//                   <Text style={styles.SubjectSubName}>102 PAGES</Text>
//                 </View>
//                 <View style={styles.SubjectView}>
//                   <Text style={styles.SubjectCount}>03</Text>
//                 </View>
//               </View>
//             </ScrollView>
//           </View>