import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from '../constant';
import AuthStack from './AuthStack';
import Tab_navigation from './Tab_navigation';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Start from '../screens/Start';
const Stack = createNativeStackNavigator();

const Main_navigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          translucent={true}
          showHideTransition="slide"
          animated
          backgroundColor={COLORS.secondary}
          barStyle="light-content"
        />
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="Tab_navigation" component={Tab_navigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Main_navigator;
