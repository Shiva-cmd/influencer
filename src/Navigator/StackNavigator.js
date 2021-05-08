/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SigninScreen} from '../Screen/SigninScreen';
import {SignupScreen} from '../Screen/SignupScreen';
import {ForgotpasswordScreen} from '../Screen/ForgotpasswordScreen';
import {HomeScreen} from '../Screen/HomeScreen';
const Stack = createStackNavigator();

export function AuthScreenStack() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
        component={SigninScreen}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: false,
        }}
        component={SignupScreen}
      />
      <Stack.Screen
        name="forgotpssword"
        options={{
          headerShown: false,
        }}
        component={ForgotpasswordScreen}
      />
    </Stack.Navigator>
  );
}

export function HomeScreenStack(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="home" component={HomeScreen}/>
    </Stack.Navigator>
  );
}