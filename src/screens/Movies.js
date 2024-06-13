import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import images from '../assets/images';
import Cart from '../components/Cart';
import Button from '../components/Button';
import color from '../theme/color';
import Carousel from 'react-native-reanimated-carousel';
import axios from 'axios';

const Movies = ({navigation}) => {
  const [moviesdata, setMoviesData] = useState([]);
  const getmovies = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://customdemo.website/apps/tbd/public/api/get-movie',
    };
    axios
      .request(config)
      .then(response => {
        if (response.data.success == true) {
          setMoviesData(response?.data?.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getmovies();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: color.background}}>
      <View style={{height: '100%', position: 'absolute', width: '100%'}}>
        <Image
          source={images.movies}
          style={{height: '100%', width: '100%', position: 'absolute'}}
        />
        <Text
          style={{
            fontSize: 25,
            justifyContent: 'center',
            width: '90%',
            fontWeight: '900',
            alignSelf: 'center',
            color: 'white',
            textAlign: 'center',
            marginTop: '70%',
          }}>
          Select your three favourite movies
        </Text>
      </View>
      <View
        style={{
          height: '50%',
          marginTop: '95%',
          justifyContent: 'flex-end',
          paddingLeft: 10,
        }}>
        <ScrollView horizontal={true} contentContainerStyle={{height: 125}}>
          {moviesdata.map((img, index) => {
            return <Cart key={index} img={img.url} />;
          })}
        </ScrollView>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{height: 125, marginTop: 10}}>
          {moviesdata.map((img,index) => {
            return <Cart key={index} img={img.url} />;
          })}
        </ScrollView>
        <Button text={'Next'} onPress={() => navigation.navigate('Comedian')} />
      </View>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({});
