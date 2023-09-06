import {
  ActivityIndicator,
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
import {acceptRequest, getChatlist} from '../../redux/action/auth-action';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const Chat_Screen = ({navigation}) => {
  const dispatch = useDispatch();
  const {user, chat_list, loading, request} = useSelector(
    state => state.authReducer,
  );
  console;
  // console.log(chat_list, 'list');
  useEffect(() => {
    dispatch(getChatlist(user?.uid));
  }, []);

  const onpressAccept = id => {
    const data = {
      status: 'accepted',
    };
    dispatch(acceptRequest(id, data, chat_list));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.main_view}>
        <View style={styles.sub_view}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name={back_arrow_white} />
          </TouchableOpacity>
          <View>
            <Text style={styles.text2}>Metting List</Text>
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
                      <Text style={styles.text_grid}>request to connect</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => onpressAccept(item.id)}
                      style={{
                        backgroundColor: COLORS.primary,
                        paddingVertical: 7,
                      }}>
                      <Text style={styles.text}>
                        {item?.status == 'pending'
                          ? 'pending'
                          : item?.status == 'accepted'
                          ? 'Chat'
                          : 'Request'}
                      </Text>
                    </TouchableOpacity>
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
