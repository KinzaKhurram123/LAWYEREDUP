import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, images} from '../../constant';
import Header from '../../Component/Header';
import {styles} from './index.style';
import {Button} from '../../Component';
import {useDispatch} from 'react-redux';
import localStoreUtil from '../../utils/loccal_store';

const Authentication = ({navigation}) => {
  const dispatch = useDispatch();

  const onPressButton = async type => {
    await localStoreUtil.store_data('user_type', type);
    dispatch({type: 'SET_USER_TYPE', payload: type});
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView>
      <Header
        image={images.logo}
        isbackIcon={false}
        onpressback={() => navigation.goBack()}
      />
      <View>
        <ImageBackground style={styles.main_view} source={images.background}>
          <View style={styles.sub_view}>
            <Button
              style={styles.btn}
              onPress={() => onPressButton('client')}
              text={'Client'}
            />
            <Button
              style={styles.btn}
              onPress={() => onPressButton('lawyer')}
              text={'Lawyer'}
            />
            <Button
              style={styles.btn}
              onPress={() => onPressButton('lawfirm')}
              text={'Law Firm'}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Authentication;
