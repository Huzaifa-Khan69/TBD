import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Movies from '../screens/Movies';
import Comedian from '../screens/Comedian';
import Music from '../screens/Music';
import Shows from '../screens/Shows';
import Home from '../screens/Home';
import AskAnything from '../screens/AskAnything';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userloggedIn} = useSelector(state => state.Data.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthRoute"
        screenOptions={{headerShown: false}}>
        {userloggedIn ? (
          <Stack.Screen name="MainRoute" component={MainNavigation} />
        ) : (
          <Stack.Screen name="AuthRoute" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
