import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Styles,Share
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar} from 'react-native-elements';
import {ListItem, Left, Body} from 'native-base';

export default class Drawercomponent extends Component {

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.gradientstyle}
          colors={['#F2314E', '#936D90']}>
          <ListItem style={styles.listitemstyle}>
            <Left style={{top:2}}>
            <Image 
                source={require('../../assets/user.png')}
                style={styles.ProfImg}
              />
              
            </Left>
            <Body style={{marginRight: '30%'}}>
              <TouchableOpacity onPress={this.props.navigatetoProfileComponent}>
                <Text
                  style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                  {this.props.userData.fullName}
                </Text>
                <Text style={{fontSize: 12, color: 'white'}}>{this.props.standerd}</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
        </LinearGradient>
        <LinearGradient
          style={styles.gradientbodystyle}
          colors={['#F2314E', '#936D90']}>
          {// <ListItem icon style={styles.listitemstyle}>
          //   <Icon active name="youtube-play" color="white" size={20} />

          //   <Body style={{marginLeft: '15%'}}>
          //     <TouchableOpacity
          //       onPress={this.props.navigatetoSubscriptionComponent}>
          //       <Text style={styles.txtliststyle}>Subscription</Text>
          //     </TouchableOpacity>
          //   </Body>
          // </ListItem>
          }

          <ListItem icon style={styles.listitemstyle}>
            <Icon active name="bookmark" color="white" size={20} />

            <Body style={{marginLeft: '16%'}}>
              <TouchableOpacity onPress={this.props.navigatetoMyOrderComponent}>
                <Text style={styles.txtliststyle}>My Orders</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon style={styles.listitemstyle}>
            <Icon name="bell" color="white" size={20} />

            <Body style={{marginLeft: '13%'}}>
              <TouchableOpacity
                onPress={this.props.navigatetoNotificationComponent}>
                <Text style={styles.txtliststyle}>Notification</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
          <ListItem icon style={styles.listitemstyle}>
            <Icon name="users" color="white" size={20} />

            <Body style={{marginLeft: '13%'}}>
              <TouchableOpacity onPress={this.props.navigatetoAboutComponent}>
                <Text style={styles.txtliststyle}>About Us</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon style={styles.listitemstyle}>
            <Icon name="share-alt" color="white" size={20} />

            <Body style={{marginLeft: '15%'}}>
              <TouchableOpacity  onPress={() =>
                    Share.share({
                      message: 'Check out VCARE app : https://play.google.com/store/apps/details?id=com.vcareme ',
                    })
                  }>
                <Text style={styles.txtliststyle}>Share</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon style={styles.listitemstyle}>
            <Icon name="phone" color="white" size={20} />

            <Body style={{marginLeft: '15%'}}>
              <TouchableOpacity>
                <Text style={styles.txtliststyle}>Contact</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon style={styles.listitemstyle}>
            <Icon name="info-circle" color="white" size={20} />

            <Body style={{marginLeft: '15%'}}>
              <TouchableOpacity
                onPress={this.props.navigatetoTermsandConditionComponent}>
                <Text style={styles.txtliststyle}>Term & Condition</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon style={styles.listitemstyle}>
            <Icon name="power-off" color="white" size={20} />

            <Body style={{marginLeft: '15%'}}>
              <TouchableOpacity onPress={this.props.handleOnPressLogout}>
                <Text style={styles.txtliststyle}>Logout</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientstyle: {
    height: '12%',
  },
  listitemstyle: {
    borderBottomWidth: 0,
  },
  ProfImg: {
    width: 53,
    height: 53,
  },
  gradientbodystyle: {
    height: '85%',
    padding: 10,
  },
  txtliststyle: {
    fontSize: 16,
    color: 'white',
  },
});
