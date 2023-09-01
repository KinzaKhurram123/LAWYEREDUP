import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, images, SIZES} from '../../../constant';
import Common_Header from '../../../Component/CommonHeader';
import {Icons, InuputFeild} from '../../../Component';
import blue_back_arrow from '../../../assest/icons/blue _back_arrow';
import {styles} from './index.style';
import back_arrow_white from '../../../assest/icons/back_arrow_white';
import plus_icon from '../../../assest/icons/plus_icon';
import cencle_icon from '../../../assest/icons/cencle_icon';
import search_icon from '../../../assest/icons/search_icon';
import round_close_icon from '../../../assest/icons/round_close_icon';

const Topics = [
  {
    id: 1,
    name: 'Topic of the day ( The Real Judgment)',
    image: images.full_logo,
    icon: round_close_icon,
  },
  {
    id: 2,
    name: 'Topic of the day ( The Real Judgment)',
    image: images.full_logo,
    icon: round_close_icon,
  },
  {
    id: 3,
    name: 'Easiest way to get your case custody',
    image: images.full_logo,
    icon: round_close_icon,
  },
  {
    id: 4,
    name: 'Best Lawyers in area',
    image: images.full_logo,
    icon: round_close_icon,
  },
];
const Forums = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.background}>
        <View style={styles.sub_view}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name={back_arrow_white} />
          </TouchableOpacity>
          <View>
            <Text style={styles.titles_header}>Forum</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Creat_Fourms')}
            style={{
              alignItems: 'flex-end',
              flex: 1,
              paddingLeft: SIZES.padding2,
            }}>
            <Icons name={plus_icon} />
          </TouchableOpacity>
        </View>
      </View>
      <InuputFeild
        style={styles.search_view}
        rightIcon={search_icon}
        name="search"
        placeholder="Search Your Contact"
      />
      <View style={{flex: 1, paddingHorizontal: SIZES.padding}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.head}>Popular Topics</Text>
          <TouchableOpacity>
            <Text style={styles.text}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={Topics}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 9,
                }}>
                <Image source={item.image} style={{width: 20, height: 30}} />
                <View style={{paddingVertical: SIZES.padding}}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
                <Icons name={item.icon} style={styles.icon} />
              </View>
            );
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: SIZES.padding,
          }}>
          <Text style={styles.head}>Trending Topics</Text>
          <Text style={styles.text}>See All</Text>
        </View>
        <FlatList
          data={Topics}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 9,
                }}>
                <Image source={item.image} style={{width: 20, height: 30}} />
                <View style={{paddingVertical: SIZES.padding}}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
                <Icons name={item.icon} style={styles.icon} />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Forums;
