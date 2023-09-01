import {StyleSheet, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Main_navigator from './src/navigation/Main_navigator';
import Toast from 'react-native-toast-message';

const App = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Main_navigator />
      <Toast />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
