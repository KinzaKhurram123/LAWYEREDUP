import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, images, SIZES} from '../../constant';
import {Icons} from '..';

const InuputFeild = ({
  style,
  placeholder,
  onChangeText,
  secureText,
  keyboardType,
  defaultValue,
  onFocus,
  onBlur,
  ref,
  isEdit,
  value,
  icon,
  inputStyle,
  rightIcon,
  iconStyle,
  maxLength,
  onPressRightIcon,
  image,
  multiline
}) => {
  return (
    <View style={[styles.main_view, style]}>
      {icon && <Icons name={icon ? icon : null} style={styles.flexDirection} />}
      {image && <Image source={images.united} />}
      <TextInput
        ref={ref}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        // secureTextEntry={secureText}
        style={styles.input}
        placeholderTextColor={COLORS.text_placeholder}
        defaultValue={defaultValue}
        value={value}
        maxLength={maxLength}
        onBlur={onBlur}
        editable={isEdit}
        multiline={multiline}
        underlineColorAndroid="transparent"
      />
      {rightIcon && (
        <TouchableOpacity secureTextEntry onPress={onPressRightIcon}>
          <Icons name={rightIcon} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InuputFeild;

const styles = StyleSheet.create({
  main_view: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.light_grey,
    paddingHorizontal: SIZES.padding2 * 1.5,
    marginTop: SIZES.padding,
  },
  icon: {
    width: '6%',
  },
  input: {
    flex: 1,
    ...FONTS.Regular14,
    color: COLORS.secondary,
    height: 40,
  },
});
