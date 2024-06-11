import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Cart from '../components/Cart';
import Button from '../components/Button';
import color from '../theme/color';
import Carousel from 'react-native-reanimated-carousel';

const music_img = [
  {
    image: images.music1,
  },
  {
    image: images.music2,
  },
  {
    image: images.music3,
  },
];
const scroll = [
  {
    image: images.music4,
  },
  {
    image: images.music5,
  },
  {
    image: images.music6,
  },
  {
    image: images.music7,
  },
];

const Music = ({navigation}) => {
  const {width} = Dimensions.get('window');
  const chunkedImages = [];
  for (let i = 0; i < music_img.length; i += 3) {
    chunkedImages.push(music_img.slice(i, i + 3));
  }
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
       <Carousel
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={chunkedImages}
          scrollAnimationDuration={1000}
          renderItem={({item}) => (
            <View style={{flexDirection:"row",}}>
                {item.map((image, index) => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems:"center",
                // backgroundColor:"pink",
                height: 130,
              }}>
                <Cart img={image.image} />
                </View>
              ))}
            </View>
          )}
        />
        <ScrollView
          horizontal={true}
          contentContainerStyle={{marginTop: 150, height: 125}}>
          {scroll.map(img => {
            return <Cart img={img.image} />;
          })}
        </ScrollView>
        <Button text={'Next'} onPress={() => navigation.navigate('Shows')} />
      </View>
    </View>
  );
};

export default Music;

const styles = StyleSheet.create({});
