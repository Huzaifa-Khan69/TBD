import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = ({icon1, text, icon2,onPress1,onPress2}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginHorizontal: 10,
        alignSelf:"center",
        marginVertical:15
      }}>
        <TouchableOpacity onPress={onPress1}>
      {icon1 ? icon1 : null}
      </TouchableOpacity>
      <Text style={{fontSize:25,fontWeight:"600",color:"white"}}>{text}</Text>
      <TouchableOpacity onPress={onPress2}>
      {icon2 ? icon2 : null}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
