import {
  ActivityIndicator,
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

const Comedian = ({navigation}) => {
  const [comediandata, setComedianData] = useState([]);
  const getcomedian = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://customdemo.website/apps/tbd/public/api/get-comedian',
    };
    axios
      .request(config)
      .then(response => {
        setIsLoading(true)
        if (response.data.success == true) {
          setComedianData(response?.data);
          setIsLoading(false)
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getcomedian();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: color.background}}>
      <View style={{height: '45%', width: '100%', position: 'absolute'}}>
        <Image
          source={images.comedian}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            position: 'absolute',
          }}
        />
        <Text
          style={{
            fontSize: 25,
            justifyContent: 'center',
            width: '90%',
            fontWeight: '900',
            color: 'white',
            alignSelf: 'center',
            textAlign: 'center',
            marginTop: '72%',
          }}>
          Select your three favourite Comedians
        </Text>
      </View>
      <View
        style={{
          height: '50%',
          marginTop: '80%',
          justifyContent: 'flex-end',
          // backgroundColor:"pink"
        }}>
          {isLoading?<ActivityIndicator size={"large"}/>:
        <ScrollView
          horizontal={true}
          contentContainerStyle={{marginTop: 10, height: 125}}>
          {comediandata.data?.map((img,index) => {
            return <Cart key={index} img={comediandata.path + '/' + img.image} />;
          })}
        </ScrollView>
}
        <Button text={'Next'} onPress={() => navigation.navigate('Music')} />
      </View>
    </View>
  );                                               
};
                                               
export default Comedian;

const styles = StyleSheet.create({});
