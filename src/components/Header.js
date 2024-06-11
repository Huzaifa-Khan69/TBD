import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({icon1, text, icon2}) => {
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
        <View>
      {icon1 ? icon1 : null}
      </View>
      <Text style={{fontSize:25,fontWeight:"600",color:"white"}}>{text}</Text>
      <View>
      {icon2 ? icon2 : null}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
