import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, images, SIZES} from '../../constant';
import Common_Header from '../../Component/CommonHeader';
import {Icons} from '../../Component';
import bell_icon from '../../assest/icons/bell_icon';
import {styles} from './index.style';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import {openCamera} from 'react-native-image-crop-picker';
import option_icon from '../../assest/icons/option_icon';
import clock_icon from '../../assest/icons/clock_icon';
import {useDispatch, useSelector} from 'react-redux';
import {getChatlist} from '../../redux/action/auth-action';

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
  const dispatch = useDispatch();
  const {user, chat_list} = useSelector(state => state.authReducer);
  console.log(chat_list, 'chat_list');
  useEffect(() => {
    dispatch(getChatlist(user?.uid));
  }, []);
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
          data={chat_list}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            console.log(
              'item?.sender?.profile_image',
              item?.sender?.profile_image,
            );
            return (
              <TouchableOpacity
                style={styles.notification_view}
                onPress={() =>
                  navigation.navigate('Chat', {username: item.tittle})
                }>
                <View style={styles.another_view}>
                  <View>
                    <Image
                      style={{height: 100, width: 100}}
                      source={
                        item?.sender?.profile_image
                          ? {uri: item?.sender?.profile_image}
                          : images.profile_1
                      }
                    />
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.text_card}>
                      {item?.sender?.full_name}
                    </Text>
                    {/* <Text style={{color: 'black'}}>{item.text}</Text> */}
                  </View>
                  <View>
                    <Text style={{textAlign: 'right'}}>{item.time}</Text>
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
