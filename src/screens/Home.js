import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../theme/color';
import images from '../assets/images';
import Foundation from 'react-native-vector-icons/Foundation';
import Bottom from '../components/Bottom';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { selectOption } from '../redux/ColorSlice';

const Home = ({navigation}) => {
 const dispatch=useDispatch()

  return (
    <View style={{flex: 1, backgroundColor: color.background}}>
      <Image
        source={images.strips}
        style={{position: 'absolute', width: 400}}
      />
      <Header
        icon1={<Ionicons name={'settings-outline'} size={25} />}
        text={'Home'}
        icon2={<AntDesign name={'message1'} size={25} />}
      />
      
      <Image
        source={images.avatar}
        style={{position: 'absolute', width: 400, height: 500, marginTop: 150}}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('AskAnything')}
        style={{
          width: '100%',
          height: '20%',
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          bottom: 0,
          position: 'absolute',
          backgroundColor: color.purple,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: '600',
            marginTop: 20,
          }}>
          Ask Any Thing?
        </Text>
      </TouchableOpacity>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Bottom
          onPress1={() => {
            navigation.navigate('Home'), dispatch(selectOption(0));
          }}
          onPress2={() => {
            navigation.navigate('Explore'), dispatch(selectOption(1));
          }}
          onPress3={() => {
            navigation.navigate('Profile'), dispatch(selectOption(2));
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
