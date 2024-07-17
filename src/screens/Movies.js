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
import axios from 'axios';

const Movies = ({navigation}) => {
  const [moviesdata, setMoviesData] = useState([]);
  const [selectfavMovies, setSelectedFavMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const toggleImageSelection = imageId => {
    if (selectfavMovies.includes(imageId)) {
      setSelectedFavMovies(selectfavMovies.filter(id => id !== imageId));
    } else {
      if (selectfavMovies.length < 3) {
        setSelectedFavMovies([...selectfavMovies, imageId]);
      }
    }
  };

  const getmovies = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://customdemo.website/apps/tbd/public/api/get-movie',
    };
    axios
      .request(config)
      .then(response => {
        setIsLoading(true);
        if (response.data.success == true) {
          setMoviesData(response?.data?.data);
          setIsLoading(false);
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
          marginTop: '85%',
          justifyContent: 'flex-end',
        }}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView
            horizontal={true}
            contentContainerStyle={{height: 150, marginTop: 80}}>
            {moviesdata.map((img, index) => {
              <ActivityIndicator/>
              return (
                <Cart
                  key={index}
                  img={img.url}
                  selectedItem={selectfavMovies.includes(img.id)}
                  onPress={() => toggleImageSelection(img.id)}
                />
              );
            })}
          </ScrollView>
        )}
        <Button text={'Next'} onPress={() => navigation.navigate('Comedian')} />
      </View>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({});
