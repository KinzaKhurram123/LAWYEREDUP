import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  Modal,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {COLORS, images, SIZES} from '../../constant';
import clock_icon from '../../assest/icons/clock_icon';
import {Icons} from '../../Component';
import {ColorSpace} from 'react-native-reanimated';
import left_arrow from '../../assest/icons/left_arrow';
import back_arrow_yellowicon from '../../assest/icons/back_arrow_yellowicon';
import left_arrow_blue from '../../assest/icons/left_arrow_blue';
import logout_icon from '../../assest/icons/logout_icon';
import {styles} from './index.style';
import Common_Header from '../../Component/CommonHeader';
import Auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';

const Setting = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const sheet_Modal = useRef(null);
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <SafeAreaView>
      <ImageBackground source={images.background3} style={{height: '100%'}}>
        <Common_Header
          tittle={'Setting'}
          isbackicon={true}
          onpressback={() => navigation.goBack()}
          onpressdrawer={() => navigation.openDrawer()}
          isdrawer={true}
        />
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.padding * 1.5,
          }}>
          <View
            style={{
              // padding: SIZES.padding,
              flexDirection: 'row',
            }}>
            <View>
              <Text style={styles.text}>Change Status</Text>
              <Text style={styles.para}>
                Lorem ipsum dolor sit amet, consectetur
                {'/n'}
                adipiscing
              </Text>
            </View>
            <TouchableOpacity
              onPress={createTwoButtonAlert}
              style={{
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
              }}>
              <Icons name={left_arrow_blue} />
            </TouchableOpacity>
          </View>
          <View style={{height: SIZES.padding}} />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View>
              <Text style={styles.text}>Manage Setting</Text>
              <Text style={styles.para}>
                Lorem ipsum dolor sit amet, consectetur
                {'/n'}
                adipiscing
              </Text>
            </View>
            <TouchableOpacity
              style={{
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
              }}>
              <Icons name={left_arrow_blue} />
            </TouchableOpacity>
          </View>
          <View style={{height: SIZES.padding}} />

          <View
            style={{
              // padding: SIZES.padding,
              flexDirection: 'row',
            }}>
            <View>
              <Text style={styles.text}>Privicy Setting</Text>
              <Text style={styles.para}>
                Lorem ipsum dolor sit amet, consectetur
                {'/n'}
                adipiscing
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('PrivacyPolicy')}
              style={{
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
              }}>
              <Icons name={left_arrow_blue} />
            </TouchableOpacity>
          </View>
          <View style={{height: SIZES.padding}} />

          <View
            style={{
              // padding: SIZES.padding,
              flexDirection: 'row',
            }}>
            <View>
              <Text style={styles.text}>Edit Profile</Text>
              <Text style={styles.para}>
                Lorem ipsum dolor sit amet, consectetur
                {'/n'}
                adipiscing
              </Text>
            </View>
            <TouchableOpacity
              style={{
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
              }}>
              <Icons name={left_arrow_blue} />
            </TouchableOpacity>
          </View>
          <View style={{height: SIZES.padding * 12}} />
          <TouchableOpacity
            onPress={async () => {
              navigation.dispatch(StackActions.replace('AuthStack'));
            }}
            style={{
              paddingVertical: SIZES.padding,
              flexDirection: 'row',
              gap: 7,
            }}>
            <Icons name={logout_icon} />
            <Text style={{color: COLORS.danger, fontSize: 16}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Modal
        transparent={true}
        visible={setModalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        ref={sheet_Modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            width: '90%',
            backgroundColor: COLORS.white,
            padding: SIZES.padding2,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            borderColor: COLORS.pending,
          }}>
          <Text>Logout</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text>close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Setting;
