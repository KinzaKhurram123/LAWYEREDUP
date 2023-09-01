import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constant'

const Bubble = ({props}) => {
  return (
    <Bubble
    {...props}
    textStyle={{
      right: {
        color: 'yellow',
      },
    }}
    wrapperStyle={{
      left: {
        backgroundColor: COLORS.pending,
      },
    }}
  />
  )
}

export default Bubble

const styles = StyleSheet.create({})