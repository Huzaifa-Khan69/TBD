import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';
import Entypo from 'react-native-vector-icons/Entypo';
import color from '../theme/color';
import axios from 'axios';

const SignUp = ({navigation}) => {
  const [hidepassword, setHidePassword] = useState(true);
  const [chidepassword, csetHidePassword] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    if (password !== confirmpassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    let data = new FormData();
    data.append('name',name);
    data.append('email', email);
    data.append('password',password);
    data.append('confirm_password', confirmpassword);
    data.append('type', 'user');

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://customdemo.website/apps/tbd/public/api/register',
      headers: {
        'Content-Type': 'multipart/form-data',
        // 'Authorization': `Bearer ${userToken}`,
        // ...data.getHeaders()
    },
      data: data,
    };
    axios
      .request(config)
      .then(response => {
        console.log('response>>>>>', response.data);
      })
      .catch(error => {
        console.log(error);
      });
    if (validateForm()) {
      // Submit the form data
      navigation.navigate('SignIn');
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Image
        source={images.signup}
        style={{position: 'absolute', height: '100%', width: '100%'}}
      />

      <View style={{marginTop: '75%', width: '90%', alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontWeight: '600',
            width: '75%',
          }}>
          Sign Up with email or username
        </Text>
        <Input placeholder={'Name'} value={name} setText={setName} />
        {errors.name && (
          <Text
            style={{
              color: 'red',
              marginBottom: 10,
            }}>
            {errors.name}
          </Text>
        )}
        <Input placeholder={'Email'} value={email} setText={setEmail} />
        {errors.email && (
          <Text
            style={{
              color: 'red',
              marginBottom: 10,
            }}>
            {errors.email}
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
        <Input
          placeholder={'Confirm password'}
          value={confirmpassword}
          setText={setConfirmpassword}
          onPress={() => csetHidePassword(!chidepassword)}
          hidePass={chidepassword}
          icon={
            <Entypo name={chidepassword ? 'eye-with-line' : 'eye'} size={20} />
          }
        />
        {errors.confirmPassword && (
          <Text
            style={{
              color: 'red',
              marginBottom: 10,
            }}>
            {errors.confirmPassword}
          </Text>
        )}
        <Button
          buttonStyle={{marginTop: 25}}
          text={'Sign Up'}
          onPress={handleSubmit}
        />
      </View>
      <Image
        source={images.boy}
        style={{marginTop: 140, marginLeft: 200, position: 'absolute'}}
      />
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
