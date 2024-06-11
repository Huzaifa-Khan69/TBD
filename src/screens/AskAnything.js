import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import color from '../theme/color';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import images from '../assets/images';
import Feather from 'react-native-vector-icons/Feather';
import Bottom from '../components/Bottom';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { selectOption } from '../redux/ColorSlice';
const AskAnything = ({navigation}) => {
 const dispatch=useDispatch()
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: color.background}}>
      <Image
        source={images.strips}
        style={{position: 'absolute', width: 400}}
      />
      <Header
        icon1={<Ionicons name={'settings-outline'} size={25} />}
        text={'Home'}
        icon2={<AntDesign name={'message1'} size={25} />}
      />
      
      <Image
        source={images.avatar}
        style={{position: 'absolute', width: 400, height: 500, marginTop: 150}}
      />
      <View
        style={{
          width: '100%',
          height: '30%',
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          bottom: 0,
          position: 'absolute',
          backgroundColor: color.purple,
          flexDirection: 'row',
          paddingTop: 30,
          justifyContent: 'space-between',
        }}>
        <TextInput
          placeholder="Ask Anything"
          style={{
            borderWidth: 1,
            height: 50,
            width: '60%',
            borderRadius: 50,
            paddingLeft: 15,
            marginLeft: 20,
            color: 'white',
          }}
        />
        <TouchableOpacity style={{marginRight: 35, marginTop: 18}}>
          <Feather name={'send'} size={20} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
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
    </ScrollView>
  );
};

export default AskAnything;

const styles = StyleSheet.create({});
