import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../theme/color';
import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';
import Bottom from '../components/Bottom';
import {useDispatch, useSelector} from 'react-redux';
import {selectOption} from '../redux/ColorSlice';
import axios from 'axios';
import {Logout} from '../redux/AuthSlice';
import Toast from 'react-native-toast-message';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const {profile}=useSelector(state=>state.Data.option)
  const {token} = useSelector(state => state.Data.auth);
  const [currentpassword, setCurrentPassword] = useState();
  const [newpassword, setNewPassword] = useState();
  const [confirmnewpassword, setConfirmNewPassword] = useState();

  const changepassword = () => {
    let data = new FormData();
    data.append('current_password', currentpassword);
    data.append('new_password', newpassword);
    data.append('confirm_new_password', confirmnewpassword);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://customdemo.website/apps/tbd/public/api/change-password',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    };
    axios
      .request(config)
      .then(response => {
        response.data.success === true
          ? Toast.show({
              type: 'success',
              text1: response.data.message,
            })
          : Toast.show({
              type: 'error',
              text1: response.data.message,
            });
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
  const Signout = config => {
    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        dispatch(Logout());
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleSignout = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://customdemo.website/apps/tbd/public/api/logout',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    Alert.alert('Logout', 'Are you Sure', [
      {
        text: 'Cancel',
        onPress: () => navigation.navigate('Profile'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => Signout(config)},
    ]);
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        width: '100%',
        backgroundColor: color.background,
      }}>
      <Header
        icon1={<Ionicons name={'settings-outline'} size={25} />}
        text={'Profile'}
      />
      <View
        style={{
          width: 150,
          height: 150,
          position: 'absolute',
          borderRadius: 80,
          backgroundColor: '#7F3DC1',
          marginTop: 25,
          marginLeft: 280,
        }}
      />
      <View
        style={{
          width: 135,
          height: 135,
          position: 'absolute',
          borderRadius: 80,
          backgroundColor: '#7F3DC1',
          marginTop: 400,
        }}
      />
      <View
        style={{
          width: 210,
          height: 210,
          borderRadius: 110,
          backgroundColor: '#6643B5',
          alignSelf: 'center',
          marginTop: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={profile} />
      </View>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Input
          placeholder={'Current Password'}
          inputStyle={{width: '90%'}}
          value={currentpassword}
          setText={setCurrentPassword}
        />
        <Input
          placeholder={'New Password'}
          inputStyle={{width: '90%'}}
          value={newpassword}
          setText={setNewPassword}
        />
        <Input
          placeholder={'Confirm New Password'}
          inputStyle={{width: '90%'}}
          value={confirmnewpassword}
          setText={setConfirmNewPassword}
        />
        <Button
          text={'Submit'}
          onPress={changepassword}
          buttonStyle={{marginTop: 5, width: '90%'}}
        />
        <Button
          text={'Logout'}
          onPress={handleSignout}
          buttonStyle={{marginTop: 10, width: '90%'}}
        />
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
          flexDirection: 'row',
          paddingTop: 30,
          justifyContent: 'space-between',
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
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
