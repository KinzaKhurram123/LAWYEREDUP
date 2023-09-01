import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constant';
import {Icons} from '..';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import drawer_icon from '../../assest/icons/drawer_icon';

const Common_Header = ({
  onpressback,
  isbackicon,
  tittlestyle,
  tittle,
  onpressdrawer,
  isdrawer,
}) => {
  return (
    <View style={styles.background}>
      <View style={styles.sub_view}>
        {isbackicon && (
          <TouchableOpacity onPress={onpressback}>
            <Icons name={back_arrow_white} style={styles.icon} />
          </TouchableOpacity>
        )}
        <Text style={[styles.title, tittlestyle]}>{tittle}</Text>

        {isdrawer && (
          <TouchableOpacity onpress={onpressdrawer}>
            <Icons name={drawer_icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Common_Header;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.secondary,
    paddingTop: SIZES.padding * 3,
    paddingBottom: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding,
  },
  sub_view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: SIZES.padding,
  },
  title: {
    flex: 1,
    textAlign: 'left',
    marginHorizontal: SIZES.padding,
    ...FONTS.Bold22,
    color: COLORS.white,
    // paddingRight: SIZES.padding,
  },
  icon: {
    // marginTop: SIZES.padding2,
  },
  drawer: {
    alignItems: 'flex-end',
    flex: 1,
    paddingLeft: SIZES.padding,
    // marginLeft: "30%",
    // width: '100%',
    // alignSelf:"flex-end"
  },
});
