import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {SIZES, images} from '../../constant';
import {Icons, InuputFeild} from '../../Component';
import drawer_icon from '../../assest/icons/drawer_icon';
import search_icon from '../../assest/icons/search_icon';

const Location = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.main_view}>
        <View style={styles.sub_view}>
          <TouchableOpacity>
            <Image
              source={images.profile_4}
              style={{marginLeft: SIZES.padding}}
            />
          </TouchableOpacity>
          <View style={{marginLeft: SIZES.padding}}>
            <Text style={styles.text}>Jessica Seth</Text>
            <Text style={styles.mail}>jessca@user.com</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icons name={drawer_icon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.search_view}>
        <InuputFeild
          rightIcon={search_icon}
          name="search"
          style={styles.search}
          placeholder="Explore Lawyer/Frims"
        />
      </View>
    <Image source={images.map}/>
    </SafeAreaView>
  );
};

export default Location;
