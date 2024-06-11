import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignIn from './src/screens/SignIn'
import SignUp from './src/screens/SignUp'
import Movies from './src/screens/Movies'
import Comedian from './src/screens/Comedian'
import Music from './src/screens/Music'
import Shows from './src/screens/Shows'
import Home from './src/screens/Home'
import AskAnything from './src/screens/AskAnything'
import Profile from './src/screens/Profile'
import Explore from './src/screens/Explore'
import Navigation from './src/routes/Navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/redux/Store'


const App = () => {
  return (
    // <SignIn/>
    // <SignUp/>
    // <Movies/>
    // <Comedian/>
    // <Music/>
    // <Shows/>
    // <Home/>
    // <AskAnything/>
    // <Profile/>
    // <Explore/>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <Navigation/>
  </PersistGate>
  </Provider>
  )
}

export default App

const styles = StyleSheet.create({})