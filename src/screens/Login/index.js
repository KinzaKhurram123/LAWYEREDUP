import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Header, Icons, InuputFeild} from '../../Component';
import {COLORS, FONTS, images, SIZES} from '../../constant';
import {styles} from './index.style';
import InnerContainer from '../../Component/InnerContainer';
import back_arrow_yellowicon from '../../assest/icons/back_arrow_yellowicon';
import facebook_icon from '../../assest/icons/facebook_icon';
import linkdin_icon from '../../assest/icons/linkdin_icon';
import google from '../../assest/icons/google';
import eye_icon from '../../assest/icons/eye_icon';
import {useDispatch, useSelector} from 'react-redux';
import {userlogin} from '../../redux/action/auth-action';
import {showtoast} from '../../utils/function';
import {StackActions} from '@react-navigation/native';
import localStoreUtil from '../../utils/loccal_store';
import {ContinousBaseGesture} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';
const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const {loading} = useSelector(state => state.authReducer);

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handleLogin = async () => {
    if (email.length > 0 && password.length > 0) {
      const apiData = {
        email: email,
        password: password,
      };
      dispatch(
        userlogin(apiData, async user => {
          showtoast('success', 'LoggedIn Scucessfully');
          navigation.dispatch(StackActions.replace('Tab_navigation'));
        }),
      );
    } else {
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        translucent={true}
        showHideTransition="slide"
        animated
        backgroundColor={COLORS.secondary}
        barStyle="light-content"
      />
      <ImageBackground style={styles.main_view} source={images.background2}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.main_views}>
            <View style={styles.sub_views}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icons style={styles.icon} name={back_arrow_yellowicon} />
              </TouchableOpacity>
              <View style={{marginLeft: SIZES.padding}}>
                <Text style={[styles.title]}>Back to Main Screen</Text>
              </View>
            </View>
          </View>
          <View style={{paddingVertical: SIZES.padding * 2}}>
            <Image
              source={images.whiteLogo}
              style={{alignSelf: 'center', height: 50, width: '60%'}}
            />
          </View>
          <InnerContainer>
            <View
              style={{
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.padding,
              }}>
              <Text style={styles.Heading}>Sign In</Text>
              <InuputFeild
                name="email"
                value={email}
                onChangeText={txt => setemail(txt)}
                placeholder="phtuonganh@gmail.com"
                // maxLength={20}
              />
              <View style={{height: SIZES.padding}} />
              <InuputFeild
                name="Password"
                value={password}
                onChangeText={txt => setpassword(txt)}
                rightIcon={eye_icon}
                placeholder="Enter Password"
                maxLength={20}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgetPasward')}>
                <Text style={styles.forget}>Forget Your Password</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignContent: 'center'}}>
              {loading ? (
                <ActivityIndicator size={'large'} color={COLORS.primary} />
              ) : (
                <TouchableOpacity
                  style={styles.btn3}
                  onPress={() => {
                    handleLogin();
                  }}>
                  <Text style={styles.text}>Sign In</Text>
                </TouchableOpacity>
              )}
              <View style={styles.or_view}>
                <View style={styles.line} />
                <Text style={styles.or_text}>Or</Text>
                <View style={styles.line} />
              </View>
            </View>
            <View style={styles.container}>
              <TouchableOpacity style={styles.GernalBtn}>
                <Icons name={facebook_icon} />
                <Text style={styles.text}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.googleBtn}>
                <Icons name={google} />
                <Text style={styles.text}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkBtn}>
                <Icons name={linkdin_icon} />
                <Text style={styles.text}>LinkedIn</Text>
              </TouchableOpacity>
            </View>
          </InnerContainer>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingVertical: SIZES.padding * 2,
            }}>
            <Text style={styles.textlast}>Don't have an Account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup_client')}>
              <Text style={styles.text2}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
