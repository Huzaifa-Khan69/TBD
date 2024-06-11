import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';
import Entypo from 'react-native-vector-icons/Entypo'
import color from '../theme/color';



const SignUp = ({navigation}) => {
  const [hidepassword, setHidePassword] = useState(true);
  const [chidepassword, csetHidePassword] = useState(true);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Image source={images.signup} style={{position: 'absolute',height:"100%",width:"100%"}} />
      
      <View style={{marginTop: '75%', width: '90%', alignSelf: 'center'}}>
        <Text style={{fontSize: 25,color:"white",fontWeight:'600', width: '75%'}}>
            Sign Up with email or username
        </Text>
        <Input placeholder={"Name"}/>
        <Input placeholder={"Email"}/>
        <Input
          placeholder={'password'}
          onPress={()=>setHidePassword(!hidepassword)}
          hidePass={hidepassword}
          icon={
            <Entypo name={hidepassword ? 'eye-with-line' : 'eye'} size={20} />
          }
        />
        <Input
          placeholder={'Confirm password'}
          onPress={()=>csetHidePassword(!chidepassword)}
          hidePass={chidepassword}
          icon={
            <Entypo name={chidepassword ? 'eye-with-line' : 'eye'} size={20} />
          }
        />
        <Button buttonStyle={{marginTop:25}} text={"Sign Up"} onPress={()=>navigation.navigate("SignIn")}/>
      </View>
      <Image source={images.boy} style={{marginTop:140, marginLeft: 200,position:"absolute"}} />
     
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
