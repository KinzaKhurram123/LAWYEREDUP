import {
  StyleSheet,
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {COLORS, images, SIZES} from '../../constant';
import {Header, Icons} from '../../Component';
import Common from '../../Component/CommonHeader';
import {styles} from './index.style';
import clock_icon from '../../assest/icons/clock_icon';

const notification = [
  {
    id: 1,
    icon: images.full_logo,
    text: 'James Else has sent you a message',
    clock: clock_icon,
    time: '08:01 PM',
  },
  {
    id: 2,
    icon: images.full_logo,
    text: 'James Else has sent you a message',
    clock: clock_icon,
    time: '08:01 PM',
  },
  {
    id: 3,
    icon: images.full_logo,
    text: 'James Else has sent you a message',
    clock: clock_icon,
    time: '08:01 PM',
  },
  {
    id: 4,
    icon: images.full_logo,
    text: 'James Else has sent you a message',
    clock: clock_icon,
    time: '08:01 PM',
  },
  {
    id: 5,
    icon: images.full_logo,
    text: 'James Else has sent you a message',
    clock: clock_icon,
    time: '08:01 PM',
  },
];
const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <Common
        tittle="Notification"
        isbackicon={true}
        isdrawer={true}
        onpressback={() => navigation.goBack()}
        onpressdrawer={() => navigation.openDrawer()}
      />
      <View>
        <Text style={styles.text}>Todays</Text>
        <FlatList
          vertical
          data={notification}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item?.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                style={styles.notification_view}>
                <View style={styles.another_view}>
                  <View
                    style={{
                      justifyContent: 'center',
                      borderRadius: SIZES.padding,
                    }}>
                    <Image
                      source={item.icon}
                      style={{
                        marginLeft: SIZES.padding2,
                      }}
                    />
                  </View>
                  <View style={{padding: SIZES.padding2, justifyContent: 'center'}}>
                    <Text style={styles.text_card}>{item.text}</Text>
                    <View style={styles.time}>
                      <Icons style={{textAlign: 'left'}} name={item.clock} />
                      <Text style={{textAlign: 'left'}}>{item.time}</Text>
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
export default Notification;
