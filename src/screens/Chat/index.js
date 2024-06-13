import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {Bubble, GiftedChat, Message} from 'react-native-gifted-chat';
import {COLORS, FONTS, images, SIZES} from '../../constant';
import {Icons} from '../../Component';
import option_icon from '../../assest/icons/option_icon';
import {styles} from './index.style';
import drawer_icon from '../../assest/icons/drawer_icon';
import video_call_icon from '../../assest/icons/video_call_icon';
import {useDispatch, useSelector} from 'react-redux';
import {addChat, getChat} from '../../redux/action/auth-action';
import {ConfirmButton} from 'react-native-modal-datetime-picker';
import database from '@react-native-firebase/database';
import CustomBubble from './Component/Bubble';

const Chat = ({navigation, route}) => {
  const {data} = route.params;
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.authReducer);
  const [messages, setMessages] = useState([]);

  // const id = data?.sender_id + data?.reciever_id;
  
  useEffect(() => {
  dispatch(getChat(data?.sender_id + data?.reciever_id))
  }, []);

  const onSend = useCallback((message = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, message),
    );
    const id = data?.sender_id + data?.reciever_id;
    let obj = {
      user: message?.[0]?.user,
      text: message?.[0]?.text,
      _id: data?.sender_id + data?.reciever_id,
      created_at: message?.[0]?.createdAt,
    };

    dispatch(addChat(obj));
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
            <Image
              source={
                data?.sender?.profile_image
                  ? {uri: data?.sender?.profile_image}
                  : images.profile_4
              }
            />
            <View>
              <Text style={styles.text}>{data?.sender?.full_name}</Text>
              <Text style={styles.active}>Active</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignItems: 'flex-end',
              flex: 1,
              paddingLeft: SIZES.padding * 3,
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
        renderBubble={props => {
            <CustomBubble props={props}/>
        }}
        user={{id: user?.uid, avatar: user?.profile_image}}
      />
    </SafeAreaView>
  );
};

export default Chat;
