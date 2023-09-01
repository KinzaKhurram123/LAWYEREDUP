import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, images, SIZES} from '../../constant';
import Common_Header from '../../Component/CommonHeader';
import {Icons} from '../../Component';
import bell_icon from '../../assest/icons/bell_icon';
import {styles} from './index.style';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import {openCamera} from 'react-native-image-crop-picker';
import option_icon from '../../assest/icons/option_icon';
import clock_icon from '../../assest/icons/clock_icon';

const Chatlist = [
  {
    id: 1,
    icon: images.chat1,
    tittle: 'Chirstina Alonso',
    text: 'You Hey! Hows it going?',
    time: '08:01 PM',
  },
  {
    id: 2,
    icon: images.chat2,
    tittle: 'Jannies Doe',
    text: 'You Hey! Hows it going?',
    time: '08:01 PM',
  },
  {
    id: 3,
    icon: images.chat1,
    tittle: 'Chirstina Alonso',
    text: 'You Hey! Hows it going?',
    time: '08:01 PM',
  },
  {
    id: 4,
    icon: images.chat2,
    tittle: 'Jannies Doe',
    text: 'You Hey! Hows it going?',
    time: '08:01 PM',
  },
  {
    id: 6,
    icon: images.chat1,
    tittle: 'Chirstina Alonso',
    text: 'You Hey! Hows it going?',
    time: '08:01 PM',
  },
  {
    id: 7,
    icon: images.chat1,
    tittle: 'Jannies Doe',
    text: 'You Hey! Hows it going?',
    time: '08:01 PM',
  },
  {
    id: 8,
    icon: images.chat1,
    tittle: 'Chirstina Alonso',
    text: 'You Hey! Hows it going?',
    time: '08:01 PM',
  },
  {
    id: 9,
    icon: images.chat1,
    tittle: 'Jannies Doe',
    text: 'You Hey! Hows it going?',
    time: '08:01 PM',
  },
];

const Chat_Screen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.main_view}>
        <View style={styles.sub_view}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name={back_arrow_white} />
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>Metting List</Text>
          </View>
          <TouchableOpacity
            // onPress={() => navigation.navigate('Creat_Fourms')}
            style={{
              alignItems: 'flex-end',
              flex: 1,
              paddingLeft: SIZES.padding2,
            }}>
            <Icons name={option_icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main_views}>
        <FlatList
          data={Chatlist}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.notification_view}
                onPress={() =>
                  navigation.navigate('Chat', {username: item.tittle})
                }>
                <View style={styles.another_view}>
                  <View>
                    <Image source={item.icon} />
                  </View>
                  <View style={{flex : 1}}>
                    <Text style={styles.text_card}>{item.tittle}</Text>
                    <Text style={{color: 'black'}}>{item.text}</Text>
                  </View>
                  <View>
                    <Text style={{textAlign: 'right',}}>{item.time}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View style={{height: SIZES.padding}} />
      </View>
    </SafeAreaView>
  );
};

export default Chat_Screen;
