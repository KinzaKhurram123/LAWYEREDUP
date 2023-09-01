import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constant'

const InnerContainer = ({style, children}) => {
  return (
    <View style ={[styles.container , style]}>
    {children}
    </View>
  )
}

export default InnerContainer

const styles = StyleSheet.create({
container:{
    backgroundColor:COLORS.white, 
    marginHorizontal:SIZES.padding
}
})