import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo'

const SignIn = () => {
  return (
    <View style={{flex: 1, width: '100'}}>
      <View style={{position: 'absolute', width: '100%'}}>
        <Image source={images.background} style={{position: 'absolute'}} />
        <Image
          source={images.car}
          style={{width: 360, height: 580, position: 'absolute'}}
        />
        <Image
          source={images.girl}
          style={{
            // backgroundColor: 'red',
            width: '95%',
            height:550,
            marginTop: 20,
            marginLeft: 60,
            resizeMode: 'contain',
            position: 'absolute',
          }}
        />
      </View>
      <View style={{marginTop: '108%', width: '90%', alignSelf: 'center'}}>
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
        <Input placeholder={'password'} icon={<Entypo name={"eye"} size={20}/>}/>
        <TouchableOpacity style={{left: '65%', width: '40%'}}>
          <Text style={{color: 'white'}}>forget password?</Text>
        </TouchableOpacity>
        <Button buttonStyle={{marginTop: 8}} text={'Sign Up'} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: 10,
          }}>
          <TouchableOpacity>
            <Image source={images.google} style={{width: 25, height: 25}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.facebook} style={{width: 25, height: 25}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Foundation name={'social-apple'} size={35} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
