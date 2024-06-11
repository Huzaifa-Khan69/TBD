import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../assets/images'
import Cart from '../components/Cart';
import Button from '../components/Button';
import color from '../theme/color';
import Carousel from 'react-native-reanimated-carousel';

const comedian_img = [
    {
      image: images.comedian1,
    },
    {
      image: images.comedian2,
    },
    {
      image: images.comedian3,
    },
  ];
  const scroll = [
    {
      image: images.comedian4,
    },
    {
      image: images.comedian5,
    },
    {
      image: images.comedian6,
    },
    {
      image: images.comedian7,
    },
  ];

const Comedian = ({navigation}) => {
  const {width} = Dimensions.get('window');
  const chunkedImages = [];
  for (let i = 0; i < comedian_img.length; i += 3) {
    chunkedImages.push(comedian_img.slice(i, i + 3));
  }
  return (
    <View style={{flex: 1,backgroundColor:color.background}}>
    <View style={{height:"45%",width:"100%",position:"absolute"}}>
      <Image
        source={images.comedian}
        style={{width:"100%",height:"100%",resizeMode:"contain",position: 'absolute'}}
      />
      <Text
        style={{
          fontSize: 25,
          justifyContent: 'center',
          width: '90%',
          fontWeight: '900',
          color:"white",
          alignSelf:"center",
          textAlign: 'center',
          marginTop:"72%",
        }}>
        Select your three favourite Comedians
      </Text>
    </View>
    <View style={{height:"50%",marginTop:"95%",justifyContent:"flex-end", paddingLeft: 10}}>
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
        <ScrollView horizontal={true} contentContainerStyle={{marginTop:150,height:125}}>
          {scroll.map(img => {
            return <Cart img={img.image} />;
          })}
        </ScrollView>
        <Button text={'Next'} onPress={()=>navigation.navigate("Music")}/>
      </View>
    </View>
  )
}

export default Comedian

const styles = StyleSheet.create({})