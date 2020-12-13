import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Styles,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TitleNotificationcomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/titlenotificationimg.png')}
          style={{height: 172, width: '100%'}}
        />
        <View style={{position: 'absolute', left: 10, top: 10}}>
          <TouchableOpacity   onPress={this.props.backToScreen} style={styles.iconstyle}>
            <Icon name="chevron-left" size={17} />
          </TouchableOpacity>
        </View>
        <View style={styles.bodycontent}>
          <View style={styles.bodyimg}>
            <Image
              source={require('../../assets/7.png')}
              style={{opacity: 0.4}}
            />
          </View>
          <View style={styles.bodytxt}>
            <Text style={styles.titletxt}>Title of Notification</Text>
            <Text style={styles.paratxt}>
              Lorem Ipsum is simply dummy text of the printing and {'\n'}
              typesetting industry. Lorem Ipsum has been the{'\n'}
              industry's standard dummy text ever since the 1500s,{'\n'}
              when an unknown printer took a galley of type and{'\n'}
              scrambled it to make a type specimen book. Lorem{'\n'}
              Ipsum is simply dummy text of the printing and{'\n'}
              typesetting industry. Lorem Ipsum has been the{'\n'}
              industry's standard dummy text ever since the 1500s,{'\n'}
              when an unknown printer took a galley of type and{'\n'}
              scrambled it to make a type specimen book. Lorem{'\n'}
              Ipsum is simply dummy text of the printing and{'\n'}
              typesetting industry. Lorem Ipsum has been the {'\n'}
              industry's standard dummy text ever since the 1500s,{'\n'}
              when an unknown printer took a galley of type and{'\n'}
              scrambled it to make a type specimen book.
            </Text>
          </View>
        </View>
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
    position: 'relative',
    alignItems: 'flex-start',
    flex: 1,
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
