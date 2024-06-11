import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import color from '../theme/color';

const SignIn = ({navigation}) => {
  const [hidepassword, setHidePassword] = useState(true);
  return (
    <View style={{flex: 1}}>
      <Image
        source={images.login}
        style={{width: '100%', height: '100%', position: 'absolute'}}
      />
      <View
        style={{
          justifyContent: 'flex-end',
          height: '95%',
          width: '90%',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 29.5,
            color: 'white',
            fontWeight: '600',
            width: '90%',
          }}>
          Sign In with email or username
        </Text>
        <Input placeholder={'username or email'} />
        <Input
          placeholder={'password'}
          onPress={()=>setHidePassword(!hidepassword)}
          hidePass={hidepassword}
          icon={
            <Entypo name={hidepassword ? 'eye-with-line' : 'eye'} size={20} />
          }
        />
        <TouchableOpacity style={{left: '65%', width: '40%'}}>
          <Text style={{color: 'white'}}>forget password?</Text>
        </TouchableOpacity>
        <Button
          buttonStyle={{marginTop: 15}}
          text={'Sign In'}
          onPress={() => navigation.navigate('Movies')}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: 15,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Movies')}>
            <Image source={images.google} style={{width: 20, height: 20}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Movies')}>
            <Image source={images.facebook} style={{width: 20, height: 20}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Movies')}>
            <Foundation name={'social-apple'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
