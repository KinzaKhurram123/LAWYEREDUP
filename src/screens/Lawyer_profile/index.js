import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, images, SIZES} from '../../constant';
import {styles} from './index.style';
import {Icons} from '../../Component';
import info_icon from '../../assest/icons/info_icon';
import doller_icon from '../../assest/icons/doller_icon';
import blue_clock_icon from '../../assest/icons/blue_clock_icon';
import upload_icon from '../../assest/icons/upload_icon';
import white_massage_icon from '../../assest/icons/white_massage_icon';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import drawer_icon from '../../assest/icons/drawer_icon';
import more_icon from '../../assest/icons/more_icon';
import {useDispatch, useSelector} from 'react-redux';
import {Switch} from 'react-native-gesture-handler';
import {getFriendRequest, send_request} from '../../redux/action/auth-action';
import {showtoast} from '../../utils/function';

const days = [
  {
    id: 1,
    name: 'Monday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
  {
    id: 2,
    name: 'Tuesday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
  {
    id: 3,
    name: 'Wednesday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
  {
    id: 4,
    name: 'Thursday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
  {
    id: 5,
    name: 'Friday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
  {
    id: 6,
    name: 'Saturday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
  {
    id: 7,
    name: 'Sunday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
];
const Lawyer_Profile = ({navigation, route}) => {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.authReducer);
  const {loading} = useSelector(state => state.authReducer);
  const {data} = route.params;
  // console.log(data, 'datataaa');

  const sendrequest = () => {
    dispatch(getFriendRequest('sender_id', data?.uid, user?.uid))
    // const apiDate = {
    //   reciever_id: data?.uid,
    //   sender_id: user?.uid,
    //   status: 'pending',
    // };
    // dispatch(
    //   send_request(apiDate, () => {
    //     showtoast('success', 'request is send');
    //   }),
    // );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ImageBackground
        source={
          data.profile_image ? {uri: data?.profile_image} : images.profile_1
        }
        style={styles.image_view}>
        <View style={styles.sub_views}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('LawyeredUp')}>
            <Icons name={back_arrow_white} style={styles.icon} />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>{data?.full_name}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: SIZES.padding * 9}}>
            <Icons name={drawer_icon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ScrollView>
        <View style={styles.main_view}>
          <View style={styles.sub_view}>
            <View style={{flexDirection: 'row', gap: 6}}>
              <Icons name={info_icon} />
              <Text style={styles.tittle}>About us</Text>
            </View>
            <Text style={styles.text}>{data?.add_detail}</Text>
            <View
              style={{flexDirection: 'row', gap: 6, marginTop: SIZES.padding}}>
              <Icons name={info_icon} />
              <Text style={styles.tittle}>Description of Services</Text>
            </View>
            <Text style={styles.text}>{data?.discription}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 6,
                  marginTop: SIZES.padding2,
                }}>
                <Icons name={doller_icon} />
                <Text style={styles.tittle}>Cost</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate('Lawyer_Profile')}
                  style={styles.btn}>
                  <Text style={styles.btn_text}>{data?.cost}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: SIZES.padding2,
                gap: SIZES.padding,
              }}>
              <Text style={styles.text}>Location:</Text>
              <Text style={styles.texts}>{data.address}</Text>
            </View>
            <View
              style={{flexDirection: 'row', gap: 6, marginTop: SIZES.padding}}>
              <Icons name={blue_clock_icon} />
              <Text style={styles.tittle}>Operation hour</Text>
            </View>
            <FlatList
              data={data?.operational_hours}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.text2}>{item.name}</Text>
                    <View
                      style={{flexDirection: 'row', gap: SIZES.padding * 2}}>
                      <View
                        style={{
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: 5,
                        }}>
                        <TouchableOpacity style={{left: 30}}>
                          <Text style={styles.time}>{item?.start_time}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{left: 30}}>
                          <Text style={styles.time}>{item?.end_time}</Text>
                        </TouchableOpacity>
                      </View>
                      <Switch
                        trackColor={{
                          false: COLORS.primary,
                          true: COLORS.secondary,
                        }}
                        thumbColor={COLORS.white}
                        value={item?.on}
                      />
                    </View>
                  </View>
                );
              }}
            />
          </View>
          {loading ? (
            <ActivityIndicator size={'large'} color={COLORS.primary} />
          ) : (
            <View
              style={{
                paddingHorizontal: SIZES.padding,
              }}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.btn3}
                onPress={() => sendrequest()}>
                <Text style={styles.btn_text}>Send Request</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={{height: SIZES.padding}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lawyer_Profile;
