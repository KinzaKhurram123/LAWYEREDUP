import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, images, SIZES} from '../../constant';
import {Icons} from '../../Component';
import {styles} from './index.style';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import option_icon from '../../assest/icons/option_icon';
import {useDispatch, useSelector} from 'react-redux';
import {acceptRequest, getChatlist} from '../../redux/action/auth-action';
import {userTypes} from '../../config';

const Chat_Screen = ({navigation}) => {
  const dispatch = useDispatch();
  const {user, chat_list, loading, user_type, chatList_loading} = useSelector(
    state => state.authReducer,
  );
  useEffect(() => {
    dispatch(
      getChatlist(
        user?.uid,
        user_type == userTypes.lawyer ? 'reciever_id' : 'sender_id',
        user_type == userTypes.lawyer ? 'sender_id' : 'reciever_id',
      ),
    );
  }, []);

  const onpressAccept = (id, item) => {
    if (item?.status == 'pending' && user_type == userTypes.lawyer) {
      const data = {
        status: 'accepted',
      };
      dispatch(acceptRequest(id, data, chat_list));
    } else {
      navigation.navigate('Chat', {
        data: item,
      });
    }
  };


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.main_view}>
        <View style={styles.sub_view}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name={back_arrow_white} />
          </TouchableOpacity>
          <View>
            <Text style={styles.text2}>Meeting List</Text>
          </View>
          <TouchableOpacity
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
        {loading ? (
          <ActivityIndicator
            size={'large'}
            color={COLORS.primary}
            style={{marginTop: SIZES.padding}}
          />
        ) : (
          <FlatList
            data={chat_list}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            ListEmptyComponent={<Text style={{textAlign: "center", marginTop: SIZES.padding, color: 'red'}}>Not Found</Text>}
            renderItem={({item}) => {
              return (
                <View style={styles.notification_view}>
                  <View style={styles.another_view}>
                    <View>
                      <Image
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: SIZES.padding * 3,
                        }}
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
                    </View>
                    {chatList_loading ? (
                      <ActivityIndicator
                        size={'small'}
                        color={COLORS.secondary}
                      />
                    ) : (
                      <TouchableOpacity
                        onPress={() => onpressAccept(item.id, item)}
                        style={{
                          backgroundColor:
                            item?.status == 'pending'
                              ? COLORS.primary
                              : COLORS.secondary,
                          paddingVertical: 7,
                          width: 80,
                          alignItems: 'center',
                        }}>
                        <Text style={styles.text}>
                          {item?.status == 'pending'
                            ? 'Accept'
                            : item?.status == 'accepted'
                            ? 'Chat'
                            : 'Request'}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              );
            }}
          />
        )}
        <View style={{height: SIZES.padding}} />
      </View>
    </SafeAreaView>
  );
};

export default Chat_Screen;
