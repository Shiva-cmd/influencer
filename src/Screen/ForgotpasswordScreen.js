/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
import React, {useState} from 'react';
import {Formik} from 'formik';
import {Button, Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import useAuth from '../Auth/useAuth';
import * as yup from 'yup';

export function ForgotpasswordScreen(props) {
  const {user} = useAuth();
  console.log('user', user);
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
  });
  return (
    <View style={{marginHorizontal: 10, marginVertical: 10}}>
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <Text style={{textAlign: 'center', marginTop: 20}}>
          ForgotpasswordScreen
        </Text>
      </View>
      <Formik
        initialValues={{email: ''}}
        onSubmit={value => console.log(value)}
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

            <View
              style={{
                marginVertical: 20,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                bottom: 0,
                position: 'relative',
                marginVertical: 10,
              }}>
              <Button
                onPress={handleSubmit}
                title="Send Link"
                disabled={!isValid}
              />
            </View>
          </View>
        )}
      </Formik>

      <View style={{marginVertical: 20, bottom: 0}}>
        <Button
          onPress={() => {
            props.navigation.navigate('login');
          }}
          title="login"></Button>
      </View>
    </View>
  );
}
