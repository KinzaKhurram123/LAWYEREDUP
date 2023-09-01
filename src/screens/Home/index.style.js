import {Dimensions, StyleSheet} from 'react-native';
import {color, ColorSpace, SlideOutDown} from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.secondary_with_opactity,
  },
  main_view: {
    paddingTop: SIZES.padding * 4,
    paddingBottom: SIZES.padding * 3,
    backgroundColor: COLORS.secondary_with_opactity,
    paddingHorizontal: SIZES.padding2,
  },
  sub_view: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
  text: {
    ...FONTS.Bold22,
    color: COLORS.white,
  },
  mail: {
    ...FONTS.Regular11,
    color: COLORS.primary,
  },
  icon: {
    // marginLeft: SIZES.padding * 6,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  main_views: {
    flex: 1,
    paddingHorizontal: SIZES.padding2,
  },
  heading_view: {
    alignItems: 'flex-start',
    paddingHorizontal: SIZES.padding2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding,
  },
  heading_text: {
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontSize: 15,
    color: COLORS.secondary,
  },
  view_all: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.primary,
  },
  lawyer_name: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
    padding: SIZES.padding2,
    textAlign: 'center',
  },
  categoryView: {
    height: 90,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  category_image: {
    width: '40%',
    height: '62%',
    alignItems: 'center',
  },
  top_laywer: {
    backgroundColor: COLORS.light_grey,
    flexDirection: 'row',
  },
  lawyer_head: {
    color: COLORS.secondary,
    fontWeight: '700',
  },
  image_view: {
    alignItems: 'center',
  },
  profile_image: {
    position: 'absolute',
    top: -50,
    width: 70,
    height: 70,
  },
  view: {
    backgroundColor: COLORS.light_grey,
    padding: SIZES.padding2,
    borderRadius: 5,
    alignItems: 'center',
    margin: 7,
  },
  name: {
    paddingTop: SIZES.padding,
    textAlign: 'center',
    ...FONTS.Bold12,
    color: COLORS.secondary,
  },
  search_view: {
    top: -40,
  },
  flatList: {
    paddingLeft: SIZES.padding,
  },
});
