import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  main_view: {
    height: '90%',
  },
  sub_view: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.padding * 4,
  },
  title: {
    color: COLORS.white,
  },
  btn: {
    width: '60%',

  },
  btn2: {
    backgroundColor: COLORS.primary,
    height: 60,
    width: '50%',
    justifyContent: 'center',
  },
  btn3: {
    backgroundColor: 'transparent',
    height: 60,
    width: '50%',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.white,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 134
    // justifyContent: '',
  },
});
