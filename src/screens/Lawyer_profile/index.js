import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, images, SIZES} from '../../constant';
import {styles} from './index.style';
import {Icons} from '../../Component';
import info_icon from '../../assest/icons/info_icon';
import doller_icon from '../../assest/icons/doller_icon';
import White_info_icon from '../../assest/icons/White_info_icon';
import blue_clock_icon from '../../assest/icons/blue_clock_icon';
import upload_icon from '../../assest/icons/upload_icon';
import white_massage_icon from '../../assest/icons/white_massage_icon';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import drawer_icon from '../../assest/icons/drawer_icon';
import more_icon from '../../assest/icons/more_icon';
import {useDispatch, useSelector} from 'react-redux';
import {getLawyer} from '../../redux/action/category-action';

const Lawyer_Profile = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {data} = route.params;
  console.log(data, 'datataaa');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ImageBackground
        source={images.profile_header}
        style={{uri: data?.profile_image}}>
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
                <TouchableOpacity>
                  <Icons name={more_icon} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                // justifyContent: 'space-between'
              }}>
              <Text style={styles.text}>Experience:</Text>
              <Text style={styles.texts}> Lorem ipsum dolor sit amet</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: SIZES.padding2,
                justifyContent: 'space-between',
              }}>
              <Text style={styles.text}>Location:</Text>
              <Text style={styles.texts}>{data.address}</Text>
            </View>
            <View
              style={{flexDirection: 'row', gap: 6, marginTop: SIZES.padding}}>
              <Icons name={blue_clock_icon} />
              <Text style={styles.tittle}>Operation hour</Text>
            </View>
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text}>Monday</Text>
                <Text style={styles.texts}>09:00 AM - 06:00 PM </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text}>Tuesday</Text>
                <Text style={styles.texts}>09:00 AM - 06:00 PM </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text}>Wednesday</Text>
                <Text style={styles.texts}>09:00 AM - 06:00 PM </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text}>Thursday</Text>
                <Text style={styles.texts}>09:00 AM - 06:00 PM </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text}>Friday</Text>
                <Text style={styles.texts}>09:00 AM - 06:00 PM </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text}>Saturday</Text>
                <Text style={styles.head}>Closed</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text}>Sunday</Text>
                <Text style={styles.head}>Closed</Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('Creat_Fourms')}
              style={{alignItems: 'center'}}>
              <Text style={styles.top_laywer}>
                Fill out the form to speak with the lawyer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('File_Upload')}
              style={{
                flexDirection: 'row',
                gap: 7,
                marginLeft: SIZES.padding * 2,
                marginTop: SIZES.padding2,
              }}>
              <Icons name={upload_icon} />
              <Text style={styles.top_laywers}>upload your File</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: SIZES.padding,
            }}>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.btn3}
              onPress={() => navigation.navigate('My_Contact')}>
              <Text style={styles.btn_text}>Refer to Friend</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.btn3}
              onPress={() => navigation.navigate('Chat_Screen')}>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Icons name={white_massage_icon} />
                <Text style={styles.btn_text}>Meeting</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height: SIZES.padding}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lawyer_Profile;
