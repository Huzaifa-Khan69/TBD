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
import Button from '../components/Button';
import Cart from '../components/Cart';
import color from '../theme/color';
import Carousel from 'react-native-reanimated-carousel';
import axios from 'axios';

const Shows = ({navigation}) => {
  const [showsdata, setShowData] = useState([]);
  const [selectfavShows, setSelectedFavShows] = useState([]);
  const [isLoading,setIsLoading]=useState(true)

  const toggleImageSelection = imageId => {
    if (selectfavShows.includes(imageId)) {
      setSelectedFavShows(selectfavShows.filter(id => id !== imageId));
    } else {
      if (selectfavShows.length < 3) {
        setSelectedFavShows([...selectfavShows, imageId]);
      }
    }
  };

  const getShows = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://customdemo.website/apps/tbd/public/api/get-popular-tv-show',
    };
    axios
      .request(config)
      .then(response => {
        setIsLoading(true)
        if (response.data.success == true) {
          setShowData(response?.data.data);
          setIsLoading(false)
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getShows();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: color.background}}>
      <View style={{height: '100%', position: 'absolute', width: '100%'}}>
        <Image
          source={images.shows}
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
            marginTop: '75%',
          }}>
          Select your three favourite Tv Shows
        </Text>
      </View>
      <View
        style={{
          height: '50%',
          marginTop: '80%',
          justifyContent: 'flex-end',
          
        }}>
          {isLoading?<ActivityIndicator size={"large"}/>:
        <ScrollView
          horizontal={true}
          contentContainerStyle={{marginTop: 120, height: 150}}>
          {showsdata.map((img, index) => {
            return (
              <Cart
                img={img.url}
                key={index}
                selectedItem={selectfavShows.includes(img.id)}
                onPress={() => toggleImageSelection(img.id)}
              />
            );
          })}
        </ScrollView>}
        <Button text={'Next'} onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

export default Shows;

const styles = StyleSheet.create({});
