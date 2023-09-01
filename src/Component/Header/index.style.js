import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.padding * 3.5,
    paddingHorizontal: SIZES.padding,
  },
  sub_view: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60,
    width: '70%',
  },
  image_view: {
    width: '60%',
    height: 65,
    justifyContent: 'center',
  },
  icon: {
    padding: SIZES.padding2,
  },
  title: {
    ...FONTS.Bold22,
    color: COLORS.white,
    marginLeft: SIZES.padding2,
    textAlign: 'left',
  },
});
