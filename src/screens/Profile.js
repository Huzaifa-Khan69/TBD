import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../theme/color';
import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';
import Bottom from '../components/Bottom';
import { useDispatch } from 'react-redux';
import { selectOption } from '../redux/ColorSlice';

const Profile = ({navigation}) => {
const dispatch=useDispatch()
  return (
    <View style={{flex: 1, width: '100%', backgroundColor: color.background}}>
      <Header
        icon1={<Ionicons name={'settings-outline'} size={25} />}
        text={'Profile'}
      />
      <View
        style={{
          width: 150,
          height: 150,
          position: 'absolute',
          borderRadius: 80,
          backgroundColor: '#7F3DC1',
          marginTop: 25,
          marginLeft: 280,
        }}
      />
      <View
        style={{
          width: 135,
          height: 135,
          position: 'absolute',
          borderRadius: 80,
          backgroundColor: '#7F3DC1',
          marginTop: 400,
        }}
      />
      <View
        style={{
          width: 210,
          height: 210,
          borderRadius: 110,
          backgroundColor: '#6643B5',
          alignSelf: 'center',
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={images.profile} />
      </View>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Input placeholder={'Email'} inputStyle={{width: '90%'}} />
        <Input placeholder={'Name'} inputStyle={{width: '90%'}} />
        <Input placeholder={'Change Password'} inputStyle={{width: '90%'}} />
        <Button text={'Logout'} onPress={()=>navigation.navigate("SignIn")} buttonStyle={{marginTop: 18, width: '90%'}} />
      </View>

      <View
        style={{
          width: '100%',
          height: '15%',
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          bottom: 0,
          position: 'absolute',
          backgroundColor: color.purple,
          flexDirection: 'row',
          paddingTop: 30,
          justifyContent: 'space-between',
        }}
      />
      <View style={{justifyContent: 'flex-end', flex: 1}}>
        <Bottom
          onPress1={() => {
            navigation.navigate('Home'), dispatch(selectOption(0));
          }}
          onPress2={() => {
            navigation.navigate('Explore'), dispatch(selectOption(1));
          }}
          onPress3={() => {
            navigation.navigate('Profile'),dispatch(selectOption(2));
          }}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
