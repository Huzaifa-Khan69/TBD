import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import color from '../theme/color';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const Bottom = ({
  onPress1,
  onPress2,
  onPress3,
}) => {
  const {option}=useSelector(store => store.Data.option)
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={onPress1} style={{alignItems: 'center'}}>
        <Foundation
          name={'home'}
          size={25}
          color={option === 0 ? color.background : null}
        />
        <Text style={{}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress2} style={{alignItems: 'center'}}>
        <MaterialIcons
          name={'explore'}
          size={25}
          color={option === 1 ? color.background : null}
        />
        <Text>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress3} style={{alignItems: 'center'}}>
        <FontAwesome
          name={'user-circle'}
          size={25}
          color={option === 2 ? color.background : null}
        />
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
