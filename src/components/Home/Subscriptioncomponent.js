import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Styles,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';

export default class Subscriptioncomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      
          <Image source={require('../../assets/5.png')} 
          style={{position: 'absolute',width:'100%'}}/>
        
        <TouchableOpacity  onPress={this.props.backToScreen} style={styles.iconview}>
          <View style={styles.iconstyle}>
            <Icon name="chevron-left" size={17} />
          </View>
        </TouchableOpacity>
        <View style={styles.subscriptiontxtview}>
          <Text style={styles.subscriptiontxt}>Subscription</Text>
        </View>
        
          <View style={{margin: 5}}>
            <View style={styles.gradientstyleimg}>
              <Image
                source={require('../../assets/subscriptionimg.png')}
                style={{width: '98%',height:125}}
              />
            </View>
            <View style={styles.imgcontentstyle}>
              <View style={styles.syllabuscontentstyle}>
                <View>
                  <Text style={styles.syllabustxtstyle}>State Syllabus</Text>
                  <Text style={styles.gradetxtstyle}>1st Grade</Text>
                </View>
                <View style={{marginRight:'10%'}}>
                  <Text style={styles.daystxtstyle}>15 Days</Text>
                </View>
              </View>

              <View style={styles.pricecontentstyle}>
                <View>
                  <Text style={styles.pricetxtstyle}>1500/- | 2000/-</Text>
                </View>
                <View>
                  <Button
                    style={styles.btnstyle}
                    textStyle={{fontSize: 10, color: '#121212'}}>
                    Subscribe Now
                  </Button>
                </View>
              </View>
            </View>
          </View>

          <View style={{margin: 5}}>
            <View style={styles.gradientstyleimg}>
              <Image
                source={require('../../assets/subscriptionimg.png')}
                style={{width: '98%',height:125}}
              />
            </View>
            <View style={styles.imgcontentstyle}>
              <View style={styles.syllabuscontentstyle}>
                <View>
                  <Text style={styles.syllabustxtstyle}>State Syllabus</Text>
                  <Text style={styles.gradetxtstyle}>1st Grade</Text>
                </View>
                <View style={{marginRight:'10%'}}>
                  <Text style={styles.daystxtstyle}>30 Days</Text>
                </View>
              </View>

              <View style={styles.pricecontentstyle}>
                <View>
                  <Text style={styles.pricetxtstyle}>1500/- | 2000/-</Text>
                </View>
                <View>
                  <Button
                    style={styles.btnstyle}
                    textStyle={{fontSize: 10, color: '#121212'}}>
                    Subscribe Now
                  </Button>
                </View>
              </View>
            </View>
          </View>

          <View style={{margin: 5}}>
            <View style={styles.gradientstyleimg}>
              <Image
                source={require('../../assets/subscriptionimg.png')}
                style={{width: '98%',height:125}}
              />
            </View>
            <View style={styles.imgcontentstyle}>
              <View style={styles.syllabuscontentstyle}>
                <View>
                  <Text style={styles.syllabustxtstyle}>State Syllabus</Text>
                  <Text style={styles.gradetxtstyle}>1st Grade</Text>
                </View>
                <View style={{marginRight:'10%'}}>
                  <Text style={styles.daystxtstyle}>06 Months</Text>
                </View>
              </View>

              <View style={styles.pricecontentstyle}>
                <View>
                  <Text style={styles.pricetxtstyle}>1500/- | 2000/-</Text>
                </View>
                <View>
                  <Button
                    style={styles.btnstyle}
                    textStyle={{fontSize: 10, color: '#121212'}}>
                    Subscribe Now
                  </Button>
                </View>
              </View>
            </View>
          </View>

          <View style={{margin: 5}}>
            <View style={styles.gradientstyleimg}>
              <Image
                source={require('../../assets/subscriptionimg.png')}
                style={{width: '98%',height:125}}
              />
            </View>
            <View style={styles.imgcontentstyle}>
              <View style={styles.syllabuscontentstyle}>
                <View>
                  <Text style={styles.syllabustxtstyle}>State Syllabus</Text>
                  <Text style={styles.gradetxtstyle}>1st Grade</Text>
                </View>
                <View style={{marginRight:'10%'}}>
                  <Text style={styles.daystxtstyle}>01 Year</Text>
                </View>
              </View>

              <View style={styles.pricecontentstyle}>
                <View>
                  <Text style={styles.pricetxtstyle}>1500/- | 2000/-</Text>
                </View>
                <View>
                  <Button
                    style={styles.btnstyle}
                    textStyle={{fontSize: 10, color: '#121212'}}>
                    Subscribe Now
                  </Button>
                </View>
              </View>
            </View>
          </View>
        
        
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconview: {
    position: 'relative',
    left: '2%',
    top: '2%',
  },
  subscriptiontxtview: {
    position: 'relative',
    top: '1%',
    left: '10%',
  },
  subscriptiontxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3F3830',
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
  gradientstyleimg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  imgcontentstyle: {
    position: 'relative',
    top:'10%',
    left:'5%',
    
  },
  syllabuscontentstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  syllabustxtstyle: {
    color: 'white',
    fontSize: 20,
  },
  gradetxtstyle: {
    color: '#FB2E4C',
    fontSize: 16,
  },
  daystxtstyle: {
    color: 'white',
    fontSize: 20,
  },
  pricecontentstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: '1%',
  },
  pricetxtstyle: {
    color: '#FB2E4C',
    fontSize: 12,
  },
  btnstyle: {
    backgroundColor: '#FFFFFF',
    width: '70%',
    height: 20,
    borderWidth: 0,
    borderRadius: 12,
  },
});
