import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Cart = ({img, cartStyle, onPress, selectedItem}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {marginRight: 10,width:140,height:140,alignItems:"center",justifyContent:"center"},
        cartStyle,
        selectedItem ?{backgroundColor: 'yellow'}:null,
      ]}>
      <Image source={{uri: img}} style={{width: 125, height: 125}} />
    </TouchableOpacity>
  );
};

export default Cart;

const styles = StyleSheet.create({});
