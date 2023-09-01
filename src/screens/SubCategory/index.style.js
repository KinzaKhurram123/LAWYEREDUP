import {Dimensions, StyleSheet} from 'react-native';
import {color, ColorSpace, SlideOutDown} from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  category_name: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.secondary,
    paddingHorizontal: SIZES.padding2,
  },
  maincategory_name: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.primary,
    paddingHorizontal: SIZES.padding2,
  },
  categoryView: {
    flexDirection: 'row',
    alignItems: 'center',
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
  checkbox: {
    flex: 1,
    alignItems: 'flex-end',
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
    fontSize: 18,
    color: COLORS.secondary,
    fontWeight: '600',
  },
  flatlist: {
    backgroundColor: COLORS.light_grey,
    marginTop: SIZES.padding2,
    paddingVertical: SIZES.padding2,
  },
});
