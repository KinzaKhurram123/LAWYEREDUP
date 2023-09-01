import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Common_Header from '../../Component/CommonHeader';
import {COLORS, images, SIZES} from '../../constant';
import {Icons, InuputFeild} from '../../Component';
import drawer_icon from '../../assest/icons/drawer_icon';
import {styles} from './index.style';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import clock_icon from '../../assest/icons/clock_icon';
const ForumInner = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.main_view}>
        <View style={styles.sub_view}>
          <TouchableOpacity style={{justifyContent:'center'}} onPress={() => navigation.goBack()}>
            <Icons name={back_arrow_white} />
          </TouchableOpacity>
          <View style={{marginLeft: SIZES.padding}}>
            <Text style={styles.text}>Forum</Text>
            <Text style={styles.text}>Easiest way to get your case </Text>
          </View>
        </View>
        <View style={{height: SIZES.padding}} />
        <View
          style={{
            borderBottomColor: COLORS.white,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={{height: SIZES.padding2}} />
        <View style={{flexDirection: 'row', gap: 4}}>
          <Text style={styles.para}>By</Text>
          <Image
            source={images.profile_3}
            style={{height: SIZES.padding * 2, width: SIZES.padding * 2}}
          />
          <Text style={styles.para2}>Bullie Tuker</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text
            style={{
              padding: SIZES.padding,
              color: COLORS.secondary,
              fontSize: SIZES.h15,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // padding: SIZES.padding,
              paddingHorizontal: SIZES.padding,
            }}>
            <Text style={styles.heading_text}>Comments</Text>
            <Text style={{color: COLORS.primary}}>(2)</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={images.profile_3}
                style={{height: SIZES.padding * 3, width: SIZES.padding * 3}}
              />
              <Text style={styles.heading_text}>Miley T.</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons name={clock_icon} />
              <Text style={styles.heading_view}>08:01 PM</Text>
            </View>
          </View>
          <Text
            style={{
              paddingLeft: SIZES.padding * 1.5,
              paddingRight: SIZES.padding * 2,
              color: COLORS.secondary,
              fontSize: 16,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur
          </Text>
          <View style={{height: SIZES.padding}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={images.profile_3}
                style={{height: SIZES.padding * 3, width: SIZES.padding * 3}}
              />
              <Text style={styles.heading_text}>Miley T.</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons name={clock_icon} />
              <Text style={styles.heading_view}>08:01 PM</Text>
            </View>
          </View>
          <Text
            style={{
              paddingLeft: SIZES.padding * 1.5,
              paddingRight: SIZES.padding * 2,
              color: COLORS.secondary,
              fontSize: 16,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur
          </Text>
          <View style={{padding: SIZES.padding}}>
            <InuputFeild
              placeholder={'Post your comment here....'}
              style={styles.input}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.btn_text}>Submint</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForumInner;
