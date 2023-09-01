import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Common_Header from '../../Component/CommonHeader';
import {COLORS, images, SIZES} from '../../constant';
import {styles} from './index.style';
import Signup_client from '../Signup';

const chats = [
  {
    id: 1,
    name: 'Christina Alonso',
    text: 'You Hey! Hows it going?',
    time: '08:00 PM',
    num: 1,
    image: images.chat1,
  },
  {
    id: 2,
    name: 'Jennis Doe',
    text: 'You Hey! Hows it going?',
    time: '08:00 PM',
    num: 1,
    image: images.chat2,
  },
  {
    id: 3,
    name: 'Sylvia Brown',
    text: 'You Hey! Hows it going?',
    time: '08:00 PM',
    num: 8,
    image: images.chat1,
  },
  {
    id: 4,
    name: 'Wiktoria Lopez',
    text: 'You Hey! Hows it going?',
    time: '08:00 PM',
    num: 1,
    image: images.chat2,
  },
  {
    id: 5,
    name: 'Adrien Mussachio',
    text: 'You Hey! Hows it going?',
    time: '08:00 PM',
    num: 1,
    image: images.chat1,
  },
  {
    id: 7,
    name: 'Alfie Wood',
    text: 'You Hey! Hows it going?',
    time: '08:00 PM',
    num: 1,
    image: images.chat2,
  },
  {
    id: 8,
    name: 'Lopez Adrien',
    text: 'You Hey! Hows it going?',
    time: '08:00 PM',
    num: 1,
    image: images.chat1,
  },
  {
    id: 9,
    name: 'Lopez Adrien',
    text: 'You Hey! Hows it going?',
    time: '08:00 PM',
    num: 1,
    image: images.chat2,
  },
  {
    id: 10,
    name: 'Lopez Adrien',
    text: 'You Hey! Hows it going?',
    time: '08:00 PM',
    num: 1,
    image: images.chat1,
  },
  {
    id: 11,
    name: 'Lopez Adrien',
    text: 'You Hey! Hows it going?',
    time: '08:00 PM',
    num: 1,
    image: images.chat2,
  },
];

const Meeting = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <Common_Header
        isbackicon={true}
        tittle={'Meeting List'}
        isdrawer={true}
        onpressback={() => navigation.goBack()}
      />
      <View>
        <View style={{height: SIZES.padding}} />
        <FlatList
          data={chats}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item?.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.notification_view}>
                <View style={styles.another_view}>
                  <View
                    style={{
                      backgroundColor: COLORS.light_grey,
                      borderRadius: SIZES.padding2,
                      flexDirection: 'row',
                    }}>
                    <Image source={item.image} />
                    <View style={{flexDirection: 'column', gap: 4}}>
                      <Text>{item.name}</Text>
                      <Text>{item.text}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        gap: 4,
                        marginLeft: SIZES.padding * 3,
                      }}>
                      <Text style={styles.time}>{item.time}</Text>
                      <Text style={styles.num}>{item.num}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Meeting;
