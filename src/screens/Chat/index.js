import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {COLORS, FONTS, images, SIZES} from '../../constant';
import {Icons} from '../../Component';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import option_icon from '../../assest/icons/option_icon';
import {styles} from './index.style';
import drawer_icon from '../../assest/icons/drawer_icon';
import camra_icon from '../../assest/icons/camra_icon';
import video_call_icon from '../../assest/icons/video_call_icon';
import Bubble from './Component/Bubble';
import {useDispatch, useSelector} from 'react-redux';
import {chats, conversations} from '../../redux/action/auth-action';

const Chat = ({navigation, route}) => {
  const id = route.params;
  const dispatch = useDispatch();
  console.log(id, 'idd');

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    dispatch(conversations(id, set_massage));
  }, []);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.main_view}>
        <View style={styles.sub_view}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icons name={drawer_icon} />
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', paddingHorizontal: SIZES.padding}}>
            <Image source={images.profile_4} />
            <View>
              <Text style={styles.text}>hello</Text>
              <Text style={styles.active}>Active</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignItems: 'flex-end',
              flex: 1,
              paddingLeft: SIZES.padding2,
              flexDirection: 'row',
            }}>
            <Icons
              name={video_call_icon}
              style={{paddingRight: SIZES.padding}}
            />
            <Icons name={option_icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: SIZES.padding}}>
        <Text style={{textAlign: 'center', ...FONTS.Bold15}}>Today</Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        alwaysShowSend={true}
        textInputStyle={styles.text_Input}
        // renderBubble={Bubble}
        // renderBubble={props => {
        //     <Bubble/>
        // }}
        user={{id: 1}}
      />
    </SafeAreaView>
  );
};

export default Chat;
