import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export const COLORS = {
  white: '#fff',
  transparent: 'transparent',
  primary: '#E39F20',
  secondary: '#151E2F',
  text_placeholder: '#9D9CA8',
  light_grey: '#F5F6FA',
  secondary_with_opactity: '#19263D',
  scucess: '#0CBF3C',
  pending: '#77828F',
  danger: '#E32020',
  grey: 	'#D3D3D3'
};

export const SIZES = {
  // globel sizes
  base: 8,
  font: 14,
  padding: 20,
  padding2: 12,

  // font sizes
  h9: 9,
  h10: 10,
  h11: 11,
  h12: 12,
  h13: 13,
  h14: 14,
  h15: 15,
  h16: 16,
  h17: 17,
  h18: 18,
  h19: 19,
  h20: 20,
  h21: 21,
  h22: 22,
  h23: 23,
  h24: 24,
  h25: 25,
  h26: 26,
  h27: 27,
  h28: 28,
  h30: 30,
  h32: 32,

  // app dimension
  width,
  height,
};
export const FONTS = {
  Bold32: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h32),
  },
  Bold26: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h26),
  },
  Bold24: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h24),
  },
  Bold22: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h22),
  },
  Bold20: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h20),
  },
  Bold19: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h19),
  },
  Bold18: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h18),
  },
  Bold17: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h17),
  },
  Bold16: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h16),
  },
  Bold15: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h15),
  },
  Bold14: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h14),
  },
  Bold13: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h13),
  },
  Bold12: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h12),
  },
  Bold11: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h11),
  },
  Bold10: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h10),
  },
  Bold9: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h9),
  },

  Medium28: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h28),
  },
  Medium25: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h25),
  },
  Medium24: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h24),
  },
  Medium23: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h23),
  },
  Medium22: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h22),
  },
  Medium21: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h21),
  },
  Medium19: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h19),
  },
  Medium18: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h18),
  },
  Medium16: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h16),
  },
  Medium15: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h15),
  },
  Medium14: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h14),
  },
  Medium13: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h13),
  },
  Medium12: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h12),
  },
  Medium11: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h11),
  },
  Medium10: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h10),
  },

  Regular32: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h32),
  },
  Regular30: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h30),
  },
  Regular28: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h28),
  },
  Regular25: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h25),
  },
  Regular24: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h24),
  },
  Regular23: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h23),
  },
  Regular22: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h22),
  },
  Regular21: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h21),
  },
  Regular20: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h20),
  },
  Regular19: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h19),
  },
  Regular18: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h18),
  },
  Regular17: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h17),
  },
  Regular16: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h16),
  },
  Regular15: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h15),
  },
  Regular14: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h14),
  },
  Regular13: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h13),
  },
  Regular12: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h12),
  },
  Regular11: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h11),
  },
  Regular10: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h10),
  },
  Regular9: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h9),
  },

  Light21: {
    fontFamily: 'Inter-Light',
    fontSize: RFValue(SIZES.h21),
  },
  Light20: {
    fontFamily: 'Inter-Light',
    fontSize: RFValue(SIZES.h20),
  },
  Light16: {
    fontFamily: 'Inter-Light',
    fontSize: RFValue(SIZES.h16),
  },
  Light15: {
    fontFamily: 'Inter-Light',
    fontSize: RFValue(SIZES.h15),
  },
  Light14: {
    fontFamily: 'Inter-Light',
    fontSize: RFValue(SIZES.h14),
  },
  Light13: {
    fontFamily: 'Inter-Light',
    fontSize: RFValue(SIZES.h13),
  },
  Light12: {
    fontFamily: 'Inter-Light',
    fontSize: RFValue(SIZES.h12),
  },
  Light11: {
    fontFamily: 'Inter-Light',
    fontSize: RFValue(SIZES.h11),
  },
  Light10: {
    fontFamily: 'Inter-Light',
    fontSize: RFValue(SIZES.h10),
  },
};

const appTheme = {COLORS, SIZES, FONTS};
export default appTheme;
