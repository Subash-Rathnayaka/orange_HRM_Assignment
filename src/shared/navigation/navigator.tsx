import React, {useEffect, useState} from 'react';
import * as SCREENS from './navigation.types';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {StatusBar} from 'react-native';

import LoginScreen from '../../screens/Auth/loginScreen/login.screen';
import HomeScreen from '../../screens/Home/home.screen';

//Auth stacks
const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    // Stack navigator for the authentication screens
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={SCREENS.LOGIN}
        component={LoginScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          animationEnabled: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

//Home stacks
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
     // Stack navigator for the home screens
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          animationEnabled: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

const AppNavigator = (props: any) => {

  return (
    <NavigationContainer>
      {/* Hide the status bar */}
      <StatusBar hidden={true} />
      {/* Conditional rendering based on the user state */}
      {props.user ? <HomeStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => ({
  // Map the user state from Redux to props
  user: state.authReducer.user ?? null,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
