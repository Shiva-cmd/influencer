/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import {Button, Text, View, StyleSheet, Platform} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import useAuth from '../Auth/useAuth';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as Location from "expo-location";
export function SigninScreen(props) {
  const {login, user, logOut} = useAuth();
  // const [location, setLocation] = useState(null);

  const displayData = async () => {
    try {
      let useqr = await AsyncStorage.getItem('authUser');
      alert(useqr);
    } catch (error) {
      alert(error);
    }
  };
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  console.log('in sigh user', user);
  return (
    <View style={{marginHorizontal: 10, marginVertical: 10}}>
      <Text style={{marginTop: 20, textAlign: 'center'}}>Login</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={value => login({user: value})}
        validationSchema={loginValidationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View>
            <TextInput
              name="email"
              placeholder="Email Address"
              style={{
                height: 40,
                width: '100%',
                margin: 10,
                backgroundColor: 'white',
                borderColor: 'gray',
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 10,
                padding: 5,
              }}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && (
              <Text style={{fontSize: 10, color: 'red', textAlign: 'center'}}>
                {errors.email}
              </Text>
            )}
            <TextInput
              name="password"
              style={{
                height: 40,
                width: '100%',
                margin: 10,
                backgroundColor: 'white',
                borderColor: 'gray',
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 10,
                padding: 5,
              }}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && (
              <Text style={{fontSize: 10, color: 'red', textAlign: 'center'}}>
                {errors.password}
              </Text>
            )}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                bottom: 0,
                position: 'relative',
                marginVertical: 10,
              }}>
              <Button
                onPress={handleSubmit}
                title="LOGIN"
                disabled={!isValid}
              />
            </View>
          </View>
        )}
      </Formik>

      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          bottom: 0,
          position: 'relative',
          marginVertical: 10,
        }}>
        <Button
          onPress={() => {
            props.navigation.navigate('register');
          }}
          title="register"
        />
        <Button
          onPress={() => {
            props.navigation.navigate('forgotpssword');
          }}
          title="forgotpassword"
        />
      </View>
      <Button
        onPress={() => {
          // logOut()
          displayData();
        }}
        title="forgotpassword"
      />
    </View>
  );
}
