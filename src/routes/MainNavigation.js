import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Movies from '../screens/Movies';
import Comedian from '../screens/Comedian';
import Music from '../screens/Music';
import Shows from '../screens/Shows';
import Home from '../screens/Home';
import AskAnything from '../screens/AskAnything';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="Comedian" component={Comedian} />
      <Stack.Screen name="Music" component={Music} />
      <Stack.Screen name="Shows" component={Shows} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AskAnything" component={AskAnything} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
