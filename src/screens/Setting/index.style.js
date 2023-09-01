import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: SIZES.padding,
  },
  anotherView: {
    backgroundColor: COLORS.light_grey,
    flexDirection: 'row',
    padding: SIZES.padding2,
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
  text: {
    color: COLORS.secondary_with_opactity,
    fontSize: 20,
    fontWeight: '500',
  },
  para: {
    color: COLORS.secondary_with_opactity,
    ...FONTS.Light11,
  },
  containerStyle: {backgroundColor: 'white', padding: 20},
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal3: {
    height: 300,
    width: 300,
  },
});
