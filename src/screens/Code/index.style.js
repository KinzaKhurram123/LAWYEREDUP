import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  main_view: {
    height: '100%',
  },
  main_views: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    // padding: SIZES.padding,
  },
  sub_view: {
    marginTop: SIZES.padding * 3,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SIZES.padding,
    paddingVertical: SIZES.padding,
    // padding: SIZES.padding * 2,
  },
  cell: {
    width: 55,
    height: 55,
    lineHeight: 40,
    fontSize: 24,
    borderWidth: 0.5,
    textAlign: 'center',
    borderRadius: 7,
    color: COLORS.pending,
    backgroundColor: COLORS.text_code,
    borderColor: COLORS.text_code,
  },
  code_text: {
    color: COLORS.primary,
    ...FONTS.Regular20,
  },
  codeFieldRoot: {
    marginTop: SIZES.padding,
    // height: 50,
    marginBottom: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  btn3: {
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.padding,
    width: '100%',
  },
  text: {
    color: COLORS.white,
    ...FONTS.Bold14,
    marginLeft: 5,
  },
  textlast: {
    color: COLORS.primary,
    ...FONTS.Light14,
  },
  text2: {
    textAlign: 'center',
    ...FONTS.Light14,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Heading: {
    ...FONTS.Bold26,
    textAlign: 'center',
    color: COLORS.secondary_with_opactity,
    // marginTop: SIZES.padding * 2,
    paddingTop: SIZES.padding * 1.5,
  },
  background: {
    margin: SIZES.padding,
    height: '75%',
  },
  btn_text: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: SIZES.padding,
  },
});
