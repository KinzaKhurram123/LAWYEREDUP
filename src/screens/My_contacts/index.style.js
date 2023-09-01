import {Dimensions, StyleSheet} from 'react-native';
import {color, ColorSpace, SlideOutDown} from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.white,
    paddingTop: SIZES.padding * 2,
  },
  sub_view: {
    paddingHorizontal:SIZES.padding,
    paddingVertical: SIZES.padding,
    alignItems: "center",
    flexDirection: 'row',
    // justifyContent: 'space-between',
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
    fontSize: 22,
    fontWeight: '500',
    color: COLORS.secondary,
    textAlign: 'left',
    marginHorizontal: SIZES.padding,
  },
  search_view: {
    padding: SIZES.padding2,
  },
  checkbox: {
    // borderRadius: 5,
    // borderWidth: 1,
    borderColor: COLORS.primary,
    // padding: SIZES.padding *2
  },
  btn3: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    height: 40,
    width: 70,
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: SIZES.padding *4
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
  },
  head: {
    fontSize: 13,
    color: COLORS.secondary,
  },
});
