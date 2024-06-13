import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import images from '../assets/images';
import Cart from '../components/Cart';
import Button from '../components/Button';
import color from '../theme/color';
import Carousel from 'react-native-reanimated-carousel';
import axios from 'axios';

const Music = ({navigation}) => {
  const [musicdata, setMusicData] = useState([]);
  const getmusic = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://customdemo.website/apps/tbd/public/api/get-comedian',
    };
    axios
      .request(config)
      .then(response => {
        if (response.data.success == true) {
          setMusicData(response?.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getmusic();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: color.background}}>
      <View>
        <Image
          source={images.music}
          style={{height: '100%', width: '100%', position: 'absolute'}}
        />
        <Text
          style={{
            fontSize: 25,
            justifyContent: 'center',
            width: '90%',
            color: 'white',
            fontWeight: '900',
            alignSelf: 'center',
            textAlign: 'center',
            marginTop: '75%',
          }}>
          Select your three favourite Music Artists
        </Text>
      </View>
      <View
        style={{height: '50%', justifyContent: 'flex-end', paddingLeft: 10}}>
        <ScrollView horizontal={true} contentContainerStyle={{height: 125}}>
          {musicdata.data?.map((img,index) => {
            return <Cart key={index} img={musicdata.path + '/' + img.image} />;
          })}
        </ScrollView>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{marginTop: 10, height: 125}}>
          {musicdata.data?.map((img,index) => {
            return <Cart key={index} img={musicdata.path + '/' + img.image} />;
          })}
        </ScrollView>
        <Button text={'Next'} onPress={() => navigation.navigate('Shows')} />
      </View>
    </View>
  );
};

export default Music;

const styles = StyleSheet.create({});
