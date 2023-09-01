import {Dimensions, StyleSheet} from 'react-native';
import {color, ColorSpace, SlideOutDown} from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.white,
    padding: SIZES.padding * 2,
  },
  sub_view: {
    padding: SIZES.padding*1.5,
  },
  lawyer_name: {
    // ...FONTS.Bold12,
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.secondary,
    padding: SIZES.padding2,
  },
  icon: {
    marginTop: SIZES.padding2 - 3,
  },
  input: {
    height: 100,
  },
  drawer: {
    marginLeft: 90,
  },
  categoryView: {
    height: 100,
    width: 160,
    alignContent: 'center',
    paddingBottom: SIZES.padding2,
  },
  category_image: {
    width: '100%',
    height: '100%',
  },

  lawyer_head: {
    ...FONTS.Bold14,
    color: COLORS.secondary,
  },
  image_view: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.secondary,
    textAlign: 'left',paddingVertical: SIZES.padding2
  },
  search_view: {
    padding: SIZES.padding2,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  btn3: {
    backgroundColor: COLORS.secondary,
    // padding: SIZES.padding,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
  },
  head: {
    fontSize: 13,
    paddingLeft: 14,
    color: COLORS.secondary,
  },
  btn_text:{
    color: COLORS.white,
    fontSize: 15,
  }
});
