import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS, images, SIZES} from '../../constant';
import {Icons} from '../../Component';
import doller_icon from '../../assest/icons/doller_icon';
import blue_home_icon from '../../assest/icons/blue_home_icon';
import blue_profile_icon from '../../assest/icons/blue_profile_icon';
import blue_clipboard_icon from '../../assest/icons/blue_clipboard_icon';
import logout_icon from '../../assest/icons/logout_icon';
import edit_icon from '../../assest/icons/edit_icon';
import invoice_icon from '../../assest/icons/invoice_icon';
import blue_notification from '../../assest/icons/blue_notification';
import secure_icon from '../../assest/icons/secure_icon';
import submission_icon from '../../assest/icons/submission_icon';
import setting_icon from '../../assest/icons/setting_icon';
import auth, {firebase} from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {userlogin, usersignout} from '../../redux/action/auth-action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import localStoreUtil from '../../utils/loccal_store';

const DrawerContent = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.authReducer);
  const [image, setImage] = useState(user?.profile_image);

  const Drawer_Item = [
    {
      title: 'Home',
      goto: () => navigation.navigate('Home'),
      icon: blue_home_icon,
    },
    {
      title: 'Profile',
      goto: () => navigation.navigate('Profile'),
      icon: blue_profile_icon,
    },
    {
      title: 'Submission History',
      goto: () => navigation.navigate('Submission_History'),
      icon: submission_icon,
    },
    {
      title: 'Forms',
      goto: () => navigation.navigate('Forums'),
      icon: blue_clipboard_icon,
    },
    {
      title: 'Notification',
      goto: () => navigation.navigate('Notification'),
      icon: blue_notification,
    },
    {
      title: 'Invoice',
      goto: () => navigation.navigate('Invoice'),
      icon: invoice_icon,
    },
    {
      title: 'Secure Chats',
      goto: () => navigation.navigate('Chat_Screen'),
      icon: secure_icon,
    },
    {
      title: 'History',
      goto: () => navigation.navigate('History'),
      icon: doller_icon,
    },
    {
      title: 'Setting',
      goto: () => navigation.navigate('Setting'),
      icon: setting_icon,
    },
  ];

  const logout = async () => {
    dispatch(usersignout());
    navigation.dispatch(StackActions.replace('AuthStack'));
  };
  return (
    <View style={styles.drawer_background}>
      <View
        style={{
          backgroundColor: COLORS.secondary,
          paddingVertical: SIZES.padding * 2.5,
          paddingHorizontal: SIZES.padding,
        }}>
        <View style={styles.sub_view}>
          <TouchableOpacity>
            <Image
              source={{uri: image}}
              style={{
                height: 60,
                width: 60,
                borderRadius: SIZES.padding * 2,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingVertical: SIZES.padding2,
              marginLeft: 11,
              bottom: SIZES.padding2,
            }}>
            <Text style={styles.text}>{user?.full_name}</Text>
            <Text style={styles.text2}>{user?.email}</Text>
          </View>
          <TouchableOpacity
          style={{height:SIZES.padding, width: SIZES.padding, alignItems: 'center'}}
            onPress={() => navigation.navigate('Profile')}>
            <Icons name={edit_icon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{alignItems: 'flex-start', marginTop: SIZES.padding}}>
          <FlatList
            data={Drawer_Item}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity style={styles.faltlistitem} onPress={item.goto}>
                <Icons name={item.icon} style={styles.icon} />
                <Text style={{color: COLORS.secondary, fontSize: 15}}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            onPress={() => logout()}
            style={{flexDirection: 'row', padding: SIZES.padding, gap: 3}}>
            <Icons name={logout_icon} />
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawer_background: {
    flex: 1,
    backgroundColor: COLORS.light_grey,
  },
  sub_view: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
  text: {
    ...FONTS.Bold18,
    color: COLORS.white,
  },
  text2: {
    ...FONTS.Bold13,
    color: COLORS.primary,
  },
  mail: {
    ...FONTS.Regular11,
    color: COLORS.white,
  },
  faltlistitem: {
    padding: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  icon: {
    // padding: SIZES.padding,
    marginLeft: SIZES.padding,
    marginRight: SIZES.padding,
  },
  logout: {
    color: COLORS.danger,
    fontSize: 17,
  },
});
