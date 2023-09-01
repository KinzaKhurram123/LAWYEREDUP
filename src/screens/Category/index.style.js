import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  lawyer_name: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.white,
    padding: 6,
    textAlign: 'center',
  },
  categoryView: {
    height: 90,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  category_image: {
    width: '45%',
    height: '64%',
    alignItems: 'center'
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
  checkbox: {
    paddingLeft: SIZES.padding * 7,
  },
  btn: {
    backgroundColor: COLORS.secondary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
  },
  head: {
    fontSize: 19,
    color: COLORS.secondary,
    fontWeight: '600',
  },
  flatlist: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: '45%',
    marginTop: SIZES.padding2,
  },
});
