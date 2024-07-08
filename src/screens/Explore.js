import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../theme/color';
import images from '../assets/images';
import Bottom from '../components/Bottom';
import {useDispatch} from 'react-redux';
import {profilePicture, selectOption} from '../redux/ColorSlice';
import Avatar from '../components/Avatar';

const avatar_images = [
  {
    img: require('../assets/images/avatar1.png'), // This is correct
    id: 1,
  },
  {
    img: images.profile, // Assuming this is imported correctly, this should be fine
    id: 2,
  },
  // {
  //   img: require('../assets/images/avatar1.png'),
  //   id:1
  // },
  // {
  //   img: images.profile,
  //   id:2
  // },
  {
    img: images.avatar3,
    id: 3,
  },
  {
    img: images.avatar4,
    id: 4,
  },
  {
    img: images.avatar5,
    id: 5,
  },
  {
    img: images.avatar6,
    id: 6,
  },
];
const Explore = ({navigation}) => {
  const dispatch = useDispatch();
  const setProfilePicture = img => {
    Alert.alert('Change Profile Picture');
  };
  return (
    <View style={{flex: 1, backgroundColor: color.background}}>
      <Header
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
        }}
      />
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Text style={{color: 'white', fontSize: 25}}>
          Select Your Character
        </Text>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {avatar_images.map((eachObject, index) => {
            console.log(eachObject)
            return (
              <Avatar
                key={index} // Providing a unique key
                img={eachObject.img}
                onPress={() => setProfilePicture(eachObject.img)} // Wrap setProfilePicture in an arrow function to prevent immediate invocation
              />
            );
          })}
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
