import {Dimensions, StyleSheet} from 'react-native';
import {color, ColorSpace, SlideOutDown} from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  lawyer_name: {
    // ...FONTS.Bold12,
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.secondary,
    padding: SIZES.padding2,
  },
  background: {
    resizeMode: 'cover',
    height: 270,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    // padding: SIZES.padding *2
  },
  categoryView: {
    height: 100,
    width: 160,
    alignContent: 'center',
    paddingBottom: SIZES.padding2,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: COLORS.white,
    textAlign: 'left',
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

  search_view: {
    top: -40,
  },
  flatlist: {
    marginLeft: 4,
  },
  checkbox: {
    paddingLeft: SIZES.padding,
  },
  btn: {
    backgroundColor: COLORS.primary,
    padding: 7,
    // paddingHorizontal: SIZES.padding * 4,
    // paddingVertical: SIZES.padding,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 3,
  },
  btn3: {
    backgroundColor: COLORS.secondary,
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2
  },
  text: {
    // marginTop: 10,
    color: COLORS.secondary,
    fontSize: 13,
    fontWeight: '600',
    paddingTop: SIZES.padding2,
  },
  texts: {
    paddingTop: 10,
    color: COLORS.secondary,
    fontSize: 13,
    marginLeft: SIZES.padding,
    textAlign: 'left',
  },
  tittle: {
    color: COLORS.secondary,
    fontSize: 18,
    fontWeight: '700',
  },
  head: {
    marginTop: 10,
    color: COLORS.danger,
    fontSize: 13,
    // marginRight: SIZES.padding,
  },

  head_text: {
    fontSize: 16,
    color: COLORS.secondary,
    fontWeight: '600',
  },
  btn_text: {
    color: COLORS.white,
    fontSize: 15,
  },
  main_view: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingHorizontal: SIZES.padding2,
  },
  sub_view: {
    padding: SIZES.padding,
  },
  sub_views: {
    flexDirection: 'row',
    gap: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
    paddingVertical: SIZES.padding * 2,
  },
  top_laywer: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: SIZES.padding,
  },
  top_laywers: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '600',
    textAlign: 'center',
  },
  para: {
    color: COLORS.secondary,
    fontSize: 11,
  },
  icon: {
    paddingTop: 7,
  },
});
