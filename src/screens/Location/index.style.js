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
    padding: SIZES.padding2,
    backgroundColor: COLORS.secondary_with_opactity,
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
    color: COLORS.white,
  },
  icon: {
    // padding: SIZES.padding,
    marginLeft: SIZES.padding * 5,
    justifyContent: 'flex-end',
  },
  main_views: {
    flex: 1,
    // marginLeft: SIZES.padding,
    // marginRight:SIZES.padding2
  },
  heading_view: {
    alignItems: 'flex-start',
    padding: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading_text: {
    // ...FONTS.Bold20,
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontSize: 15,
    color: COLORS.secondary,
    // marginTop: SIZES.padding2,
  },
  view_all: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.primary,
    // marginRight: SIZES.padding2,
  },
  flatlist: {
    marginLeft: 4,
  },
  lawyer_name: {
    ...FONTS.Bold12,
    color: COLORS.secondary,
    padding: SIZES.padding2,
  },
  categoryView: {
    height: 110,
    width: 200,
    alignContent: 'center',
    paddingBottom: SIZES.padding2,
  },
  category_image: {
    width: '100%',
    height: '100%',
  },
  top_laywer: {
    backgroundColor: COLORS.light_grey,
    // padding:SIZES.padding2,
    flexDirection: 'row',
    marginLeft: SIZES.padding,
  },
  lawyer_head: {
    ...FONTS.Bold14,
    color: COLORS.secondary,
  },
  image_view: {
    alignItems: 'center',
  },
  profile_image: {
    position: 'absolute',
    top: -70,
  },
  view: {
    backgroundColor: COLORS.light_grey,
    padding: SIZES.padding2,
    borderRadius: 5,
    // margin: SIZES.padding2,
  },
  name: {
    marginTop: SIZES.padding,
    ...FONTS.Bold12,
    color: COLORS.secondary,
  },
  search_view: {
    top: -30,
    width: '90%',
    alignSelf: 'center',
  },
});
