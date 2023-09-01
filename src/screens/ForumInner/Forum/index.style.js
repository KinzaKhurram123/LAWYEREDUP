import {Dimensions, StyleSheet} from 'react-native';
import {color, ColorSpace, SlideOutDown} from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '../../../constant';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.secondary,
    paddingVertical: SIZES.padding * 2.5,
    paddingHorizontal: SIZES.padding * 1.2,
  },
  sub_view: {
    // paddingTop: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: SIZES.padding,
  },
  lawyer_name: {
    // ...FONTS.Bold12,
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.secondary,
    padding: SIZES.padding2,
  },
  icon: {
    alignItems: 'flex-end',
    flex: 1,
    paddingRight: SIZES.padding2,
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
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.secondary,
    textAlign: 'left',
  },
  titles_header: {
    flex: 1,
    textAlign: 'left',
    marginHorizontal: SIZES.padding,
    ...FONTS.Bold22,
    color: COLORS.white,
  },
  search_view: {
    top: -20,
    width: '90%',
    alignSelf: 'center',
  },
  checkbox: {
    width: 15,
    height: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  btn3: {
    backgroundColor: COLORS.primary,
    paddingLeft: SIZES.padding,
    paddingRight: SIZES.padding,
    paddingTop: SIZES.padding2,
    paddingBottom: SIZES.padding2,
    alignItems: 'center',
    marginLeft: 70,
    borderRadius: 10,
  },
  text: {
    color: COLORS.primary,
    fontSize: 15,
  },
  head: {
    fontSize: 17,
    color: COLORS.secondary,
    fontWeight: '700',
  },
});
