import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  main_view: {
    flex:1,
    justifyContent:"flex-end"
  },
  sub_view: {
    justifyContent: 'space-between',
    flexDirection:"row", 
  },
  title: {
    color: COLORS.white,
  },
  btn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.padding *4.4,
    paddingVertical: SIZES.padding,
  },
  btn3: {
    backgroundColor: 'transparent',
    paddingHorizontal: SIZES.padding * 4,
    paddingVertical: SIZES.padding,
    alignSelf:'flex-end'
    
  },
  text:{
    color:COLORS.white
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    // flex-flow : column wrap;
    // padding: SIZES.padding2,
    // paddingLeft: SIZES.padding,
    // marginRight: SIZES.padding ,
  },
});
