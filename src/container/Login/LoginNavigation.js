import React, { Component } from "react";
import { View,Text,StyleSheet } from "react-native";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createAppContainer } from 'react-navigation';
import { Transition } from 'react-native-reanimated';
import OTPcontainer from './OTPcontainer';
import Classescontainer from './Classescontainer';
import Logincontainer from './Logincontainer';
import Signupcontainer from './Signupcontainer';
import HomeNavigation from '../Home/HomeNavigation';


const UserLogin = createAnimatedSwitchNavigator(
{
    Logincontainer:Logincontainer,
    Signupcontainer:Signupcontainer,
    OTPcontainer: OTPcontainer,
    Classescontainer:Classescontainer,
    HomeNavigation:HomeNavigation
},
{
    transition: (
    <Transition.Together>
        <Transition.Out
        type="fade"
        durationMs={300}
        interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={400} />
    </Transition.Together>
    ),
},
{
    initialRouteName: 'Logincontainer',
}
);

const LoginNavigation = createAppContainer(UserLogin);

export default LoginNavigation;
