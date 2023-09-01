import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  main_view: {
    height: '100%',
  },
  main_views: {
    paddingTop: SIZES.padding * 3,
    paddingBottom: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
  },
  sub_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding * 7,
  },

  sub_views: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    padding: SIZES.padding2,
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
    paddingVertical: SIZES.padding,
    width: '90%',
    marginLeft: 20,
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
    paddingBottom: SIZES.padding,
  },
  Heading: {
    // ...FONTS.Bold2,
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: COLORS.secondary,
    paddingBottom: SIZES.padding,
    // margin: SIZES.padding,
  },
  forget: {
    textAlign: 'right',
    ...FONTS.Regular12,
    color: COLORS.secondary,
    marginRight: SIZES.padding2 - 2,
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
    backgroundColor: '#3C5A99',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 10,
    margin: SIZES.padding2,
  },
  linkBtn: {
    backgroundColor: '#2187BD',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 10,
    margin: SIZES.padding2,
  },
  googleBtn: {
    backgroundColor: '#F95341',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 10,
    margin: SIZES.padding2,
  },
});
