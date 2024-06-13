import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constant'
import {Bubble} from 'react-native-gifted-chat';

const CustomBubble = ({props}) => {
  return (
    <Bubble
    {...props}
    textStyle={{
      right: {
        color: 'red',
      },
      left :{
         color: "red"
      }
    }}
    wrapperStyle={{
      left: {
        backgroundColor: COLORS.pending,
      },
      right: {
        backgroundColor: "red"
      }
    }}
  />
  )
}

export default CustomBubble

const styles = StyleSheet.create({})