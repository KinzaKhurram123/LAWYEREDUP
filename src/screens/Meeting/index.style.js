import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  main_view: {
    height: '100%',
  },
  main_views: {
    paddingBottom: SIZES.padding2,
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
  num: {
    backgroundColor: COLORS.scucess,
    borderRadius: SIZES.padding * 2,
    textAlign: 'center',
    width: 20,
    color:COLORS.white,
    marginLeft: 40
  },
  text: {
    color: COLORS.secondary,
    ...FONTS.Bold15,
    margin: 15,
  },
  // flatlist: {
  //   marginLeft: SIZES.padding2,
  // },
  notification_view: {
    flex: 1,
  },
  another_view: {
    backgroundColor: COLORS.light_grey,
    flexDirection: 'row',
  },
  text_card: {
    color: COLORS.secondary,
    fontSize: 15,
    fontWeight: '600',
  },
  time: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: SIZES.padding2,
    gap: 4,
  },
});
