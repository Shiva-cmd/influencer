/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';

import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Formik, Field } from 'formik';
import CustomInput from '../Screen/CustomInput';
import * as yup from 'yup';
export function SignupScreen(props) {
  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    phoneNumber: yup
      .string()
      // .matches(/(01)(\d){8}\b/, "Enter a valid phone number")
      .matches(/^\d{10}$/, 'Enter a valid phone number')
      .required('Phone number is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  return (
    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
      <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
        <Text style={{ marginTop: 20, textAlign: 'center' }}>SignUp</Text>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={signUpValidationSchema}
          onSubmit={values => console.log(values)}>
          {({ handleSubmit, isValid }) => (
            <View>
              <Field
                component={CustomInput}
                name="fullName"
                placeholder="Full Name"
              />
              <Field
                component={CustomInput}
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
              />
              <Field
                component={CustomInput}
                name="phoneNumber"
                placeholder="Phone Number"
                keyboardType="numeric"
              />
              <Field
                component={CustomInput}
                name="passowrd"
                placeholder="Password"
                secureTextEntry
              />
              <Field
                component={CustomInput}
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry
              />
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
                  title="SIGN UP"
                  disabled={!isValid}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          onPress={() => {
            props.navigation.navigate('login');
          }}
          title="login"></Button>
        <Button
          onPress={() => {
            props.navigation.navigate('forgotpssword');
          }}
          title="forgotpassword"></Button>
      </View>
    </View>
  );
}
