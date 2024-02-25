import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';

// Packages
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




// Constants
import theme from '../constants/theme';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {


  // const initialRouteName = () => {
  //   return userData.length > 0 ? 'UserScreen' : 'SignupScreen';
  // };


  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar
        backgroundColor={
             theme.backgroundColor.themeBG
        }
        // barStyle={ 'dark-content'}
      />

      <NavigationContainer>
        <Stack.Navigator initialRouteName={"SignupScreen"} >
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{ title: '', headerShown: false }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppNavigator;
