import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CheckBox from 'react-native-check-box';
import {COLORS, FONTS, SIZES} from '../../constant';

const CheckBoxs = ({
  rightTextView,
  right_text,
  uncheckImage,
  uncheckdecolor,
  checkedColor,
  setIsClicked,
  isChecked,
  checkedBorderColor,
  roundStyle,
  checkbox,
  style,
}) => {
  return (
    <CheckBox
      style={[checkbox, style]}
      rightTextView={
        rightTextView ? (
          rightTextView
        ) : (
          <Text style={styles.text}>{right_text} </Text>
        )
      }
      uncheckImage={
        <View
          style={[
            styles.checkbox,
            {
              backgroundColor: uncheckdecolor,
            },
          ]}>
          <View></View>
        </View>
      }
      checkImage={
        <View
          style={[
            styles.checkbox,
            {backgroundColor: checkedColor, borderColor: COLORS.primary},
            roundStyle,
          ]}>
          {' '}
        </View>
      }
      onclick={setIsClicked}
      isChecked={isChecked}
    />
  );
};

export default CheckBoxs;

const styles = StyleSheet.create({
  checkbox: {
    width: 15,
    height: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  text: {
    ...FONTS.Regular14,
    marginLeft: SIZES.padding,
    color: COLORS.primary,
    textAlign: 'left',
  },
});
