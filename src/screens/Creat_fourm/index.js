import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Header, InuputFeild} from '../../Component';
import Common_Header from '../../Component/CommonHeader';
import {COLORS, SIZES} from '../../constant';
import {styles} from './index.style';

const Creat_Fourms = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <Common_Header
      tittle={'Creat Fourms'}
        isbackicon={true}
        onpressback={() => navigation.goBack()}
      />
      <View style={{paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding}}>
        <InuputFeild maxLength={20} placeholder={'Tittle'} />
        <View style={{padding: SIZES.padding}} />
        <InuputFeild
          style={styles.input}
          maxLength={20}
          placeholder={'Details'}
        />
      </View>
      {/* <View style={{height: SIZES.padding * 12}} /> */}
      <View style={{padding: SIZES.padding , justifyContent:'flex-end', flex: 1}}>
        <TouchableOpacity
          style={styles.btn3}
          onPress={() => navigation.navigate('ForumInner')}>
          <Text style={styles.btn_text}>Submint</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Creat_Fourms;
