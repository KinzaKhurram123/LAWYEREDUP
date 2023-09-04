import auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {Header} from '../../Component';
import {images} from '../../constant';
import localStoreUtil from '../../utils/loccal_store';
import {styles} from './index.style';

const Start = ({navigation}) => {
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true);

  async function onAuthStateChanged(user) {
    const usertype = await localStoreUtil.get_data('user_type');
    const userData = await localStoreUtil.get_data('user');
    dispatch({type: 'SET_USER_TYPE', payload: usertype});
    dispatch({type: 'LOGIN_SUCCESS', payload: {...userData, uid: user?.uid}});
    navigation.dispatch(
      StackActions.replace(user ? 'Tab_navigation' : 'AuthStack'),
    );
    console.log(userData, 'userrrrr');
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header image={images.logo} />
      <ImageBackground
        style={styles.main_view}
        source={images.background}></ImageBackground>
    </SafeAreaView>
  );
};

export default Start;
