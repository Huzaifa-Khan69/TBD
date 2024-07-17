import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import color from '../theme/color'
import images from '../assets/images'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Bottom from '../components/Bottom'
import { useDispatch } from 'react-redux'
import { selectOption } from '../redux/ColorSlice'

const Explore = ({navigation}) => {
  const dispatch=useDispatch()
  return (
    <View style={{flex: 1, backgroundColor: color.background}}>
      <Header
      onPress1={()=>{navigation.navigate("Profile"),dispatch(selectOption(2))}}
      onPress2={()=>navigation.navigate("AskAnything")}
        icon1={<Ionicons name={'settings-outline'} size={25} />}
        text={'Explore'}
        icon2={<AntDesign name={'message1'} size={25} />}
      />
      <View
        style={{
          width: 150,
          height: 150,
          position: 'absolute',
          borderRadius: 80,
          backgroundColor: '#7F3DC1',
          marginTop: 40,
          marginLeft: 300,
        }}
      />
      <View
        style={{
          width: 150,
          height: 150,
          position: 'absolute',
          borderRadius: 80,
          backgroundColor: '#7F3DC1',
          marginTop: 150,
        }}
      />
      <View
        style={{
          width: 150,
          height: 150,
          position: 'absolute',
          borderRadius: 80,
          backgroundColor: '#7F3DC1',
          marginLeft: 150,
          marginTop: 350,
        }}
      />
      <View
        style={{
          width: 150,
          height: 150,
          position: 'absolute',
          borderRadius: 80,
          backgroundColor: '#7F3DC1',
          marginTop: 500,
        }}/>
        <View style={{width:"90%",alignSelf:"center"}}>
            <Text style={{color:"white",fontSize:25}}>
                Select Your Character
            </Text>
            <View style={{  flexWrap:"wrap",flexDirection:"row"}}>
            <Image source={images.avatar1} style={{width:"50%"}}/>
            <Image source={images.profile} style={{width:"50%"}}/>
            <Image source={images.avatar3} style={{width:"50%"}}/>
            <Image source={images.avatar4} style={{width:"50%"}}/>
            <Image source={images.avatar5} style={{width:"50%"}}/>
            <Image source={images.avatar6} style={{width:"50%"}}/>
            </View>
        </View>
        <View
        style={{
          width: '100%',
          height: '12%',
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          bottom: 0,
          position: 'absolute',
          backgroundColor: color.purple,
          paddingTop: 30,
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
            navigation.navigate('Profile'), dispatch(selectOption(2));
          }}
        />
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
