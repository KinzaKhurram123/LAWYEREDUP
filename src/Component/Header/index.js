import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {Icons} from '..';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import {images, SIZES} from '../../constant';

const Header = ({
  isbackIcon = false,
  image,
  style,
  title,
  style_text,
  titleStyle,
  onpressback,
}) => {
  return (
    <View style={styles.main_view}>
      <Image source={image} style={styles.image}/>
    </View>
  );
};

export default Header;
