import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constant'

const Button = ({onPress, text , style}) => {
  return (
    <TouchableOpacity
       onPress={onPress} style={[styles.container , style]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.padding *1.5,
        width: '50%',
        marginBottom: SIZES.padding
      },
      text:{
        ...FONTS.Bold15,
        color: COLORS.white,
      }
})