import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Input = ({placeholder, inputStyle,icon}) => {
  return (
    <View>
    <TextInput
      style={[
        {
          width: '100%',
          height: 55,
          borderWidth: 1,
          borderRadius: 10,
          alignSelf: 'center',
          backgroundColor: 'grey',
          borderColor: 'grey',
          marginTop:10,
          paddingLeft:15,
  
        },
        {inputStyle},
      ]}
      placeholder={placeholder}
    />
    <TouchableOpacity style={{position:'absolute',right:10,height:'100%',justifyContent:'center',marginTop:5}}>
        {icon ? icon : null}
        </TouchableOpacity>
        </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
