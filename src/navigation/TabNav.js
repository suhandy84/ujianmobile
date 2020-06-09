import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIconWithBadge from './../component/IconWithBadge'
import HomeStackRoot from './HomStackRoot'
import SettingStackRoot from './SettingStack'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator()


export default ()=>{
    return(
        <Tab.Navigator
            // initialRouteName='HomeStack'

            // tabBar={props => <MyTabBar {...props} />}
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'HomeStack') {
                    iconName= 'home'
                } else if (route.name === 'Profile') {
                    iconName = 'user';
                }

                // You can return any component that you like here!
                return <FontAwesome name={iconName} size={size} color={color}/>;
                

            },
            // tabBarLabel:()=>null
            // tabBarLabel:()=>null,
            // tabBarLabel:()=><Text style={{color:'blue'}}>Bebas</Text>
            })}
            tabBarOptions={{
            activeTintColor: '#3DDC84',
            inactiveTintColor: 'gray',
            // showLabel:false,
            // activeBackgroundColor:'white',
            // inactiveBackgroundColor:'tomato'
            }}
        >
            <Tab.Screen name='HomeStack' component={HomeStackRoot} options={{ title: 'Home' }}/>
            <Tab.Screen name='Profile' component={SettingStackRoot}/>
        </Tab.Navigator>
    )
}