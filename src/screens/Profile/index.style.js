import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  main_view: {
    flexDirection: 'row',
    gap: 7,
    justifyContent: 'center',
  },
  background: {
    backgroundColor: COLORS.secondary,
  },

  image_view: {
    alignItems: 'center',
  },
  // profile_image: {
  //   height: '100%',
  //   width: '100%',
  // },
  GernalBtn: {
    paddingVertical: SIZES.padding2,
    backgroundColor: COLORS.light_grey,
    paddingHorizontal: SIZES.padding,
  },
  GernalBtn2: {
    paddingVertical: SIZES.padding2,
    backgroundColor: COLORS.light_grey,
    paddingHorizontal: SIZES.padding,
  },
  flatlist2: {
    backgroundColor: COLORS.light_grey,
    marginTop: SIZES.padding,
  },
  subcategoryView: {
    // paddingVertical: SIZES.padding2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Heading2: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.primary,
  },
  subcategory_name: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.secondary,
    paddingHorizontal: SIZES.padding2,
  },
  maincategory_name: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
    paddingHorizontal: SIZES.padding2,
  },
  subcategoryView: {
    // paddingVertical: SIZES.padding2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  phone_number: {width: '68%', borderRadius: 0},
  phone_input_view: {
    flexDirection: 'row',
    width: '100%',
    gap: SIZES.padding,
  },
  phone_code: {width: '25%', borderRadius: 0},
  btn: {
    backgroundColor: COLORS.secondary,
    // padding: SIZES.padding,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    gap: 12,
  },
  check_box: {
    marginTop: SIZES.padding2,
    paddingRight: SIZES.padding2,
  },
  privacy_view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: SIZES.padding2,
  },
  privacy_text: {...FONTS.Regular13, color: COLORS.primary},
  input: {
    height: 100,
  },
  text: {
    color: COLORS.secondary,
    fontSize: 17,
    fontWeight: '600',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SIZES.padding,
  },
  btntext: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '600',
  },
  text_badges: {
    color: COLORS.primary,
    ...FONTS.Bold12,
    // marginLeft: 5,
  },
  text2: {
    ...FONTS.Bold15,
    color: COLORS.secondary,
    marginTop: SIZES.padding2,
  },
  time: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: SIZES.padding2,
    color: '#4A68A2',
  },
});
