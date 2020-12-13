import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    AsyncStorage,
} from "react-native";
import SplashScreen from './SplashScreen';
import HomeNavigation from './container/Home/HomeNavigation';
import LoginNavigation from './container/Login/LoginNavigation';

class Main extends Component {
    constructor(props){
        super(props);
           this.state={
              currentScreen:'Splash',
              isLoggedIn:false,
           }
    }

    async UNSAFE_componentWillMount() {
       
        const token = await AsyncStorage.getItem('@sessionToken:key');
        if(token){
            this.setState({isLoggedIn:true})
            setTimeout(() => { this.setState({ currentScreen: "Home" }) }, 1500);
        }else {
            this.setState({ isLoggedIn: false });
            setTimeout(() => { this.setState({ currentScreen: "Home" }) }, 1500);
        }
    }
    

    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <SplashScreen/> : this.state.isLoggedIn ? <HomeNavigation/>  : <LoginNavigation/>
        return mainScreen
    }
}
export default Main;