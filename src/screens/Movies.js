import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../assets/images';

const Movies = () => {
  return (
    <View style={{flex: 1}}>
      <Image source={images.background} style={{position: 'absolute'}} />
      <Image source={images.movies} style={{position: 'absolute'}} />
      <Text
        style={{
          fontSize: 25,
          justifyContent: 'center',
          backgroundColor: 'pink',
          width: '90%',
          alignSelf: 'center',
          textAlign: 'center',
        }}>
        Select your three favourite movies
      </Text>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({});
