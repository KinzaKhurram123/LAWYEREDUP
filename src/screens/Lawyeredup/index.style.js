import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  lawyer_name: {
    // ...FONTS.Bold12,
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.secondary,
    padding: SIZES.padding2,
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
  search_view: {
    top: -50,
  },
  checkbox: {
    paddingLeft: SIZES.padding,
  },
  btn: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    width: '120%',
    height: 32,
    justifyContent: 'center',
    paddingRight: SIZES.padding2,
  },
  btn3: {
    backgroundColor: COLORS.secondary,
    padding: SIZES.padding,
    alignItems: 'center',
  },
  text: {
    color: COLORS.primary,
    fontSize: 13,
  },
  texts: {
    color: COLORS.scucess,
    fontSize: 13,
    textAlign: 'center',
  },
  tittle: {
    color: COLORS.primary,
    fontSize: 17,
  },
  head: {
    fontSize: 19,
    // paddingLeft: SIZES.padding,
    color: COLORS.secondary,
    fontWeight: '600',
    // paddingBottom: 5
  },
  head_text: {
    fontSize: 16,
    color: COLORS.secondary,
    fontWeight: '600',
  },
  btn_text: {
    color: COLORS.white,
    fontSize: 13,
  },
  main_view: {
    marginLeft: SIZES.padding2,
    backgroundColor: COLORS.danger,
  },
  top_laywer: {
    backgroundColor: COLORS.light_grey,
    flexDirection: 'row',
    marginLeft: SIZES.padding,
  },
  para: {
    color: COLORS.secondary,
    fontSize: 10,
  },
  next_btn: {
    backgroundColor: COLORS.secondary,
    height: 55,
    justifyContent: 'center',
  },
  flatlist: {
    flexDirection: 'row',
    backgroundColor: COLORS.light_grey,
    alignItems: 'space-between',
    width: '100%',
    marginBottom: SIZES.padding,
  },
  frame: {
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
});
