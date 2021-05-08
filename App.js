/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthStorage from './src/Auth/storage';
import AuthContext from './src/Auth/context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { AuthScreenStack } from './src/Navigator/StackNavigator';
import HomeScreen from './src/Screen/HomeScreen';

enableScreens();

export default function App() {
    const [user, setUser] = useState(undefined);

    const restoreToken = async () => {
        try {
            let user = await AuthStorage._retrieveData();
            if (!user) {
                return;
            }
            setUser(user);
        } catch (e) { }
    };
    useEffect(() => {
        restoreToken();
    }, []);
    console.log('in app', user);
    return (
        <SafeAreaProvider>
            <AuthContext.Provider value={{ user, setUser }}>
                <NavigationContainer>

                    {user ? <HomeScreen /> : <AuthScreenStack />}
                </NavigationContainer>
            </AuthContext.Provider>
        </SafeAreaProvider>
    );
}
