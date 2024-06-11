import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../theme/color';

const Button = ({buttonStyle,textStyle,text,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[{
        width: '90%',
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: color.purple,
        alignItems:"center",
        justifyContent:"center",alignSelf:"center"
      },buttonStyle]}>
      <Text style={[{fontSize:16,color:"white"},textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
