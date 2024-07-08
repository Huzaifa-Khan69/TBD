import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';
import Entypo from 'react-native-vector-icons/Entypo';
import color from '../theme/color';
import axios from 'axios';
import Toast from 'react-native-toast-message';

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

  const handleSignUp = async () => {
    let data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('confirm_password', confirmpassword);
    data.append('type', 'user');

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://customdemo.website/apps/tbd/public/api/register',
      headers: {
        'Content-Type': 'multipart/form-data',
     
      },
      data: data,
    };
    return await axios
      .request(config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        Toast.show({
          type: 'error',
          text1: "Something Went Wrong",
        });
        console.log(error);
      });
  };

  const handleSubmit = async () => {
    response = await handleSignUp();
    console.log("response>>>>>>>",response)
    if (validateForm() && response.success == true) {
      // Submit the form data
      Toast.show({
        type: 'success',
        text1:response.message,
      })
      navigation.navigate('SignIn');
    } else {
      Toast.show({
        type: 'error',
        text1: response.message,
      });
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
            fontSize: 20,
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
        <Input placeholder={'Email'} 
 value={email} setText={setEmail} />
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
            <Entypo name={hidepassword ? 'eye-with-line' : 'eye'} size={20} color={"white"} />
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
            <Entypo name={chidepassword ? 'eye-with-line' : 'eye'} size={20} color={"white"} />
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
      <View style={{ flexDirection: 'row', alignItems: 'center' , marginTop:10, alignSelf:'center',gap:5}}>
  <Text style={{ color: "white"  }}>Already have an account? </Text>
  <Text style={{ color: "#6643B5" }}  onPress={() => navigation.navigate('SignIn')}>SignIn </Text>
</View>
      <Image
        source={images.boy}
        style={{marginTop: 130, marginLeft: 180, position: 'absolute' , }}
      />
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
   