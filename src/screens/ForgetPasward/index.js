import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {images, SIZES} from '../../constant';
import {styles} from './index.style';
import {Header, Icons, InnerContainer, InuputFeild} from '../../Component';
import back_arrow_yellowicon from '../../assest/icons/back_arrow_yellowicon';
import back_arrow_white from '../../assest/icons/back_arrow_white';

const ForgetPasward = ({navigation}) => {
  return (
    <ImageBackground style={styles.main_view} source={images.background}>
      <View style={styles.sub_view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons style={{paddingTop: SIZES.padding}} name={back_arrow_white} />
        </TouchableOpacity>
        <Image source={images.whiteLogo} style={{alignSelf: 'center'}} />
      </View>
      <View style={{height: '10%'}} />
      <ImageBackground style={styles.background} source={images.background3}>
        <View style={{flex: 1}}>
          <Text style={styles.Heading}>Forget Pasward</Text>
          <View style={{paddingHorizontal: SIZES.padding * 2}}>
            <Text style={styles.text2}>
              To reset password, enter your email address. A link will be shared
              to change your password.
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.padding * 1.5,
            }}>
            <InuputFeild name="email" placeholder="Email ID" maxLength={20} />
            <View style={{height: SIZES.padding *2.5}}/>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.btn3}
                onPress={() => navigation.navigate('Code')}>
                <Text style={styles.text}>Submit</Text>
              </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={styles.textlast}>Don't have an Account?</Text>
        <Text style={styles.text2}>Sign Up</Text>
      </View>
    </ImageBackground>
  );
};

export default ForgetPasward;
