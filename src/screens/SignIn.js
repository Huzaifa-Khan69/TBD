import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import { Settings } from 'react-native-fbsdk-next';

import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import color from '../theme/color';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {login} from '../redux/AuthSlice';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';


const SignIn = ({navigation}) => {
  const [hidepassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
 const fbInitialize = Settings.initializeSDK();
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
    if (validateForm()) {
      // Submit the form data
      dispatch(login(config));
    }
  };
  const  handleFbAuth= async()=> {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccessToken
  const data = await AccessToken.getCurrentAccessToken().then(
    async (data) => {
      const token = data?.accessToken;
      const response = await fetch(`https://graph.facebook.com/me?fields=id,first_name,last_name,email&access_token=${token}`);
      const { id, first_name, last_name, email } = await response.json();
    console.log('email',email,'first_name',first_name,id,last_name)
    }
    
  );
 console.log('data',data)
  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}



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
            <Entypo name={hidepassword ? 'eye-with-line' : 'eye'} size={20} color={"white"}/>
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
          <TouchableOpacity onPress={() => handleFbAuth()}>
            <Image source={images.facebook} style={{width: 20, height: 20}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Movies')}>
            <Foundation name={'social-apple'} size={30} color={"white"}  />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' , marginTop:10, alignSelf:'center' ,gap:5}}>
  <Text style={{ color: "white"  }}>Don't have an account? </Text>
  <Text style={{ color: "#6643B5" }}  onPress={() => navigation.navigate('SignUp')}>SignUp </Text>
</View>
       
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
