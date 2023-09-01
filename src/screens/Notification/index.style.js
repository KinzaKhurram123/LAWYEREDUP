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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding * 7,
  },

  sub_views: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.secondary,
    ...FONTS.Bold15,
    padding: SIZES.padding,
    // margin: 12,
  },
  // flatlist: {
  //   marginLeft: SIZES.padding2,
  // },
  notification_view: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding2,
  },
  another_view: {
    backgroundColor: COLORS.light_grey,
    flexDirection: 'row',
  },
  text_card: {
    color: COLORS.secondary,
    fontSize: 14,
    fontWeight: '600',
  },
  time: {
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    flexDirection: 'row',
    paddingTop: SIZES.padding2,
    gap: 4,
  },
});
