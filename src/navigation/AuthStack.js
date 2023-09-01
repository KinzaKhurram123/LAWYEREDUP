import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Authentication from '../screens/Authantication';
import Login from '../screens/Login';
import {COLORS} from '../constant';
import Start from '../screens/Start';
import ForgetPasward from '../screens/ForgetPasward';
import Code from '../screens/Code';
import Signup_client from '../screens/Signup';
import Profile_lawyer from '../screens/Profile';
import Setting from '../screens/Setting';
import Auth from '@react-native-firebase/auth';

const AuthStack = () => {
  const [isuserLogin, setuserLogin] = useState(false);
  Auth().onAuthStateChanged(user => {
    if (user !== null) {
      setuserLogin(true);
    }
  });
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar
        translucent={true}
        showHideTransition="slide"
        animated
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="St" component={Start} /> */}
        <Stack.Screen name="Authantication" component={Authentication} />
        <Stack.Screen name="Signup_client" component={Signup_client} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPasward" component={ForgetPasward} />
        <Stack.Screen name="Code" component={Code} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
