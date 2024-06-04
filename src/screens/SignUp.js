import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';
import Entypo from 'react-native-vector-icons/Entypo'

const SignUp = () => {
  return (
    <View style={{flex: 1, width: '100%'}}>
      <View style={{ position:"absolute",width: '100%'}}>
      <Image source={images.background} style={{position: 'absolute'}} />
        <Image source={images.girlwithmask} style={{position: 'absolute',height:850}} />
      </View>
      
      <View style={{marginTop: '88%', width: '90%', alignSelf: 'center',position:"absolute"}}>
        <Text style={{fontSize: 25,color:"white",fontWeight:'600', width: '75%'}}>
            Sign In with email or username
        </Text>
        <Input placeholder={"Name"}/>
        <Input placeholder={"Email"}/>
        <Input placeholder={"password" } icon={<Entypo name={"eye"} size={20}/>}/>
        <Input placeholder={"confirm password"} icon={<Entypo name={"eye"} size={20}/>}/>
        <Button buttonStyle={{marginTop:18}} text={"Sign Up"}/>
      </View>
      <Image source={images.boy} style={{marginTop: 190, marginLeft: 200,position:"absolute"}} />
     
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
