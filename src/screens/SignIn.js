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
import axios from 'axios';

const SignIn = ({navigation}) => {
  const [hidepassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!email.trim()) {
      errors.name = 'Name is required';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    let data = new FormData();
    data.append('email', email);
    data.append('password', password);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://customdemo.website/apps/tbd/public/api/login',
      headers: {
       
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    };
    axios
      .request(config)
      .then(response => {
        console.log("res>>>>",response.data);
      })
      .catch(error => {
        console.log(error);
      });
    if (validateForm()) {
      // Submit the form data
      navigation.navigate('Movies');
    }
  };

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
        <Input
          placeholder={'username or email'}
          value={email}
          setText={setEmail}
        />
        {errors.name && (
          <Text
            style={{
              color: 'red',
              marginBottom: 10,
            }}>
            {errors.name}
          </Text>
        )}
        <Input
          placeholder={'password'}
          value={password}
          setText={setPassword}
          onPress={() => setHidePassword(!hidepassword)}
          hidePass={hidepassword}
          icon={
            <Entypo name={hidepassword ? 'eye-with-line' : 'eye'} size={20} />
          }
        />
        {errors.password && (
          <Text
            style={{
              color: 'red',
              marginBottom: 10,
            }}>
            {errors.password}
          </Text>
        )}
        <TouchableOpacity style={{left: '65%', width: '40%'}}>
          <Text style={{color: 'white'}}>forget password?</Text>
        </TouchableOpacity>
        <Button
          buttonStyle={{marginTop: 15}}
          text={'Sign In'}
          onPress={handleSubmit}
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
