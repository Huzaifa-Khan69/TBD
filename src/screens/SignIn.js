import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {login, setData, setToken, setcat} from '../redux/AuthSlice';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {
  const [hidepassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '38449324733-shung2ispulai3bal8l9pro6sl6rhqol.apps.googleusercontent.com',
    });
  });

  const facebookLogin = async () => {
    const result = await LoginManager.logInWithPermissions(['public_profile']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();
    // console.log(data);
    dispatch(setToken(data))

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
   
    // Sign-in the user with the credential
    const fab=await auth().signInWithCredential(facebookCredential);
    dispatch(setData(fab.user))
    
  };

  const googleSignIn = async () => {
    await GoogleSignin.signOut();
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken, user} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    dispatch(setToken(idToken));
    dispatch(setData(user));
    const user_data = await auth()?.signInWithCredential(googleCredential);
   
  };

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
          <TouchableOpacity onPress={() => googleSignIn()}>
            <Image source={images.google} style={{width: 20, height: 20}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => facebookLogin()}>
            <Image source={images.facebook} style={{width: 20, height: 20}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Foundation name={'social-apple'} size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Don't have an Account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{
              borderRadius: 10,
              paddingHorizontal: 5,
            }}>
            <Text style={{fontSize: 17}}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
