import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,StatusBar
} from "react-native";
import Main from './src/Main';

class App extends Component {

  componentDidMount() {
    StatusBar.setBackgroundColor('#553A91')
  }
  render() {
    return (
      <Main/>
    );
  }
}
export default App;