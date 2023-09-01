import {Dimensions, StyleSheet} from 'react-native';
import {color, ColorSpace, SlideOutDown} from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.secondary_with_opactity,
  },
  main_view: {
    paddingTop: SIZES.padding * 3,
    paddingBottom: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.secondary_with_opactity,
  },
  sub_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    textAlign: 'left',
    marginHorizontal: SIZES.padding ,
    ...FONTS.Bold22,
    color: COLORS.white,
  },
  text_lable: {
    ...FONTS.Bold10,
    color: COLORS.white,
    padding: 3,
  },
  mail: {
    ...FONTS.Regular11,
    color: COLORS.white,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  icon: {
    // padding: SIZES.padding,
    // marginLeft: SIZES.padding,
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
    fontSize: 18,
    // color: COLORS.secondary,
    marginTop: SIZES.padding2,
    paddingHorizontal: SIZES.padding
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
  btn: {
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.padding,
    width: '90%',
    marginLeft: 20,
    marginBottom: SIZES.padding,
    marginTop: SIZES.padding,
  },
  btn_text: {
    fontSize: 17,
    color: COLORS.white,
  },
  expiry_date:{
    width: '47%', borderRadius: 0
  },
  code:{
    width: '47%', borderRadius: 0
  }
});
