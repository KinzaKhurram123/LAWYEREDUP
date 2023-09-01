import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  main_view: {
    height: '100%',
  },
  privacy_text: {...FONTS.Regular13, color: COLORS.primary},
  privacy_text2: {...FONTS.Regular13, color: COLORS.secondary},
  main_views: {
    paddingTop: SIZES.padding * 4,
    paddingBottom: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
  },
  phone_number: {width: '60%', borderRadius: 0},
  phone_input_view: {
    flexDirection: 'row',
    marginRight: 15,
    width: '110%',
    gap: SIZES.padding,
  },
  GernalBtn2: {
    paddingVertical: SIZES.padding2,
    backgroundColor: COLORS.light_grey,
    paddingHorizontal: SIZES.padding,
  },
  phone_code: {width: '25%', borderRadius: 0},
  sub_view: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: SIZES.padding * 3,
    paddingBottom: SIZES.padding * 2.5,
    gap: SIZES.padding,
  },

  sub_views: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    ...FONTS.Regular18,
    color: COLORS.white,
    marginLeft: SIZES.padding2,
    textAlign: 'left',
  },
  btn: {
    width: '70%',
  },
  btn2: {
    backgroundColor: 'transparent',
    paddingHorizontal: SIZES.padding * 4,
    paddingVertical: SIZES.padding,
  },
  btn3: {
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.padding2,
    marginTop: SIZES.padding,
  },
  text: {
    color: COLORS.white,
    ...FONTS.Bold12,
    marginLeft: 5,
  },
  textlast: {
    color: COLORS.white,
    ...FONTS.Bold12,
  },
  text2: {
    color: COLORS.primary,
    marginLeft: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Heading: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.secondary,
  },
  Heading2: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.primary,
  },
  forget: {
    textAlign: 'right',
    ...FONTS.Regular12,
    color: COLORS.pending,
    marginRight: SIZES.padding,
  },
  or_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: SIZES.padding,
    paddingVertical: 10,
  },
  or_text: {color: COLORS.text_placeholder},
  line: {
    borderColor: COLORS.text_placeholder,
    borderBottomWidth: 1,
    width: '45%',
  },
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
  linkBtn: {
    backgroundColor: '#2187BD',
    flexDirection: 'row',
    padding: SIZES.padding2,
    borderRadius: 10,
    margin: SIZES.padding2,
  },
  googleBtn: {
    backgroundColor: '#F95341',
    flexDirection: 'row',
    padding: SIZES.padding2,
    borderRadius: 10,
    margin: SIZES.padding2,
  },
  input: {
    height: 100,
  },
  privacy_view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // marginTop: SIZES.padding2,
    marginLeft: SIZES.padding2,
  },

  flatlist: {
    alignItems: 'center',
    backgroundColor: COLORS.light_grey,
    width: '48%',
    marginTop: SIZES.padding2,
    marginBottom: SIZES.padding,
  },

  flatlist2: {
    backgroundColor: COLORS.light_grey,
    marginTop: SIZES.padding,
  },
  lawyer_name: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.secondary,
    padding: 6,
    textAlign: 'center',
  },
  categoryView: {
    height: 120,
    width: 100,
    alignItems: 'center',
    paddingVertical: SIZES.padding,
  },
  category_image: {
    width: '70%',
    height: '80%',
    alignItems: 'center',
  },
  subcategoryView: {
    // paddingVertical: SIZES.padding2,
    flexDirection: 'row',
    alignItems: 'center',
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
});
