import {Dimensions, StyleSheet} from 'react-native';
import {color, ColorSpace, SlideOutDown} from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  search_view: {
    top: -40,
  },
  btn: {
    backgroundColor: COLORS.secondary,
    // padding: SIZES.padding,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // paddingTop: SIZES.padding2,
    textAlign: 'center',
    ...FONTS.Bold10,
    color: COLORS.secondary,
  },
  text2: {
    textAlign: 'center',
    ...FONTS.Bold10,
    color: COLORS.primary,
  },
  view: {
    backgroundColor: COLORS.light_grey,
    padding: 7,
    borderRadius: 5,
    alignItems: 'center',
    margin: 7,
  },
  flatList: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    // position: 'absolute',
    // top: -70,
  },
  heading_text: {
    // ...FONTS.Bold20,
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontSize: 15,
    color: COLORS.secondary,
    // marginTop: SIZES.padding2,
  },
});
