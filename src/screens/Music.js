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

const Music = ({navigation}) => {
  const [musicdata, setMusicData] = useState([]);
  const [selectfavMusicArtist, setSelectedFavMusicArtist] = useState([]);
  const [isLoading,setIsLoading]=useState(true)

  const toggleImageSelection = imageId => {
    if (selectfavMusicArtist.includes(imageId)) {
      setSelectedFavMusicArtist(
        selectfavMusicArtist.filter(id => id !== imageId),
      );
    } else {
      if (selectfavMusicArtist.length < 3) {
        setSelectedFavMusicArtist([...selectfavMusicArtist, imageId]);
      }
    }
  };

  const getmusic = () => {
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
          setMusicData(response?.data);
          setIsLoading(false)
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
      <View style={{height: '60%', position: 'absolute', width: '100%'}}>
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
        style={{height: '50%',marginTop: '82%', justifyContent: 'flex-end'}}>
          {isLoading?<ActivityIndicator size={"large"}/>:
        <ScrollView
          horizontal={true}
          contentContainerStyle={{marginTop: 75, height: 150}}>
          {musicdata.data?.map((img, index) => {
            return (
              <Cart
                key={index}
                img={musicdata.path + '/' + img.image}
                selectedItem={selectfavMusicArtist.includes(img.id)}
                onPress={() => toggleImageSelection(img.id)}
              />
            );
          })}
        </ScrollView>}
        <Button text={'Next'} onPress={() => navigation.navigate('Shows')} />
      </View>
    </View>
  );
};

export default Music;

const styles = StyleSheet.create({});
