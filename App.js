/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {Authcontext} from './src/context/Authcontext'
import AuthStack from './src/navigation/AuthStack'
// import Home from './src/screen/Home'
import Center from './src/component/Center'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AsyncStorage
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TabNav from './src/navigation/TabNav';

const App = () => {
  const [Auth,setauth]=useState(false)
  const [username]=useState('tes')
  const [loading,setloading]=useState(true)

  useEffect(()=>{
    AsyncStorage.getItem('login')//keeplogin
    .then((res)=>{
      console.log(res)
      if(res==='iya'){
        setauth(true)
      }
    }).catch((err)=>{
      console.log(err)
    })
    .finally(()=>{
      setloading(false)
    })
  },[])

  if(loading){
    return(
      <Center>
        <Text>Masih Loading</Text>
      </Center>
    )
  }

  console.disableYellowBox=true
  return (
    <Authcontext.Provider value={{Auth:Auth, username:username, signinout:()=>{
      setauth(!Auth)
    },}}>
      <NavigationContainer>
        {
          Auth?
          <TabNav/>
          :
          <AuthStack/>
        }
      </NavigationContainer>
    </Authcontext.Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
