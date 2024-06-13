import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cart = ({img,cartStyle,}) => {
  return (
    <View style={[{marginRight:10},cartStyle]}>
      <Image source={{uri:img}} style={{width:125,height:125}}/> 
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})