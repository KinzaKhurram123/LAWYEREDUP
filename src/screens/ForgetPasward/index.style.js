import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  main_view: {
    height: '100%',
  },
  main_views: {
    paddingTop: SIZES.padding * 4,
    paddingBottom: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
  },
  sub_view: {
    marginTop: SIZES.padding * 3,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    padding: SIZES.padding * 2,
  },

  btn3: {
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    // padding: SIZES.padding,
    // margin:SIZES.padding
  },
  text: {
    color: COLORS.white,
    ...FONTS.Bold14,
    marginLeft: 5,
  },
  textlast: {
    color: COLORS.white,
    ...FONTS.Bold12,
  },
  text2: {
    textAlign: 'center',
    ...FONTS.Light12,
    color: COLORS.secondary,
    paddingVertical: SIZES.padding2
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Heading: {
    ...FONTS.Bold26,
    textAlign: 'center',
    color: COLORS.secondary_with_opactity,
    marginTop: SIZES.padding * 2,
  },
  background: {
    margin: SIZES.padding,
    height: '70%',
  },
});
