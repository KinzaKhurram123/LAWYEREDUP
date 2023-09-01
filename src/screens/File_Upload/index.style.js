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
  profile_image: {
    position: 'absolute',
    top: -70,
  },
  image_view: {
    marginLeft: SIZES.padding2,
  },
  View: {
    flexDirection: 'row',
    gap: SIZES.padding * 2,
    padding: SIZES.padding,
    backgroundColor: COLORS.light_grey,
    margin: SIZES.padding2,
  },
  btn: {
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.padding,
    width: '90%',
    marginLeft: 20,
    marginBottom: SIZES.padding,
    marginTop: SIZES.padding,
  },
  container: {
    bottom: -100,
    flexDirection: 'row',
    gap: 12,
  },
  check_box: {
    marginTop: SIZES.padding2,
    paddingRight: SIZES.padding2,
  },
  upload_view: {
    alignItems: 'center',
    padding: SIZES.padding,
    margin: SIZES.padding * 2,
    borderStyle: 'dashed',
    borderColor: COLORS.text_placeholder,
    borderWidth: 2,
    borderRadius: 8,
    // backgroundColor: COLORS.pending
  },
  privacy_text: {...FONTS.Regular13, color: COLORS.primary},
  input: {
    height: 100,
  },
  text: {
    color: COLORS.primary,
    ...FONTS.Bold16,
    marginLeft: 5,
    padding: SIZES.padding,
  },
  text_badges: {
    color: '#808080',
    ...FONTS.Bold13,
  },
  cencel:{
    bottom: 15
  }
});
