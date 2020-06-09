import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './../screen/Home'
import {Button} from 'react-native'
// import Details from './../screen/Details'
const HomeStack=createStackNavigator()


const HomeStackRoot=({navigation})=>{
    return(
      <HomeStack.Navigator
      headerMode="none"
      >
        <HomeStack.Screen name='Home' component={HomeScreen}/>
        {/* <HomeStack.Screen name='Details' component={Details} initialParams={{name:'Details user'}}/> */}
      </HomeStack.Navigator>
    )
}
export default HomeStackRoot