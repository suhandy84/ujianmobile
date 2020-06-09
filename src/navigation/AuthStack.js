import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './../screen/Login'
// import Home from './../screen/Home'
import TabNav from './../navigation/TabNav'
// import Register from './../screen/Register'
import {Button} from 'react-native'

const AuthStack = createStackNavigator()

export default () => {
    return (
        <AuthStack.Navigator
        headerMode='none'
        >
            <AuthStack.Screen name='Login' component={Login} options={{ title: 'MASUKLAH' }} />
            <AuthStack.Screen name="TabHome" component={TabNav}/>
        </AuthStack.Navigator>
    )
}
