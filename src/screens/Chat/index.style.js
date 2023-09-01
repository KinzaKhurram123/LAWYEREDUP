import {Dimensions, StyleSheet} from 'react-native';
import {color, ColorSpace, SlideOutDown} from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.secondary_with_opactity,
  },
  main_view: {
    paddingVertical: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding * 1.2,
    backgroundColor: COLORS.secondary_with_opactity,
  },
  sub_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    // flex: 1,
    textAlign: 'left',
    marginHorizontal: SIZES.padding2,
    ...FONTS.Bold22,
    color: COLORS.white,
  },
  text_grid: {
    ...FONTS.Light13,
    color: COLORS.white,
  },
  mail: {
    ...FONTS.Regular11,
    color: COLORS.white,
  },
  icon: {
    alignItems: 'flex-end',
    flex: 1,
    paddingLeft: SIZES.padding2,
  },
  main_views: {
    paddingHorizontal: SIZES.padding * 1.5,
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
  grid: {
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SIZES.padding2,
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
  grid_text: {
    color: COLORS.white,
    ...FONTS.Medium12,
  },
  grid_text2: {
    color: COLORS.secondary,
  },
  row: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
  },
  row2: {
    backgroundColor: COLORS.white,
    paddingVertical: 9,
  },
  row_text: {
    color: COLORS.white,
    textAlign: 'center',
  },
  row2_text: {
    color: COLORS.secondary,
    textAlign: 'center',
    ...FONTS.Light11,
  },
  table: {
    padding: SIZES.padding,
  },
  notification_view: {
    flex: 1,
    paddingVertical: SIZES.padding2,
  },
  another_view: {
    backgroundColor: COLORS.light_grey,
    padding: SIZES.padding2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // padding:SIZES.padding2
  },
  text_card: {
    flex: 1,
    textAlign: 'left',
    marginRight: SIZES.padding * 3.5,
    ...FONTS.Bold16,
    color: COLORS.secondary,
  },
  active:{
    textAlign: 'left',
    marginHorizontal: SIZES.padding2,
    ...FONTS.Bold16,
    color: COLORS.scucess,
  },
  text_Input:{
    backgroundColor: COLORS.secondary,
    color: COLORS.white,
  },
  send:{
    backgroundColor:COLORS.primary
  }
});
