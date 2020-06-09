import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingsScreen from './../screen/Setting'
import Logout from './../screen/Logout'

const Drawer = createDrawerNavigator()



const SettingDrawer = () => {
  return (
    <Drawer.Navigator
      // screenOptions={{
      //   headerStyle:{
      //     backgroundColor:'#19b57f'
      //   },
      //   headerTitleStyle:{
      //     color:'white'
      //   },
      //   headerTitleAlign:'center'
      // }}
      drawerPosition="right"
      drawerContentOptions={{
        activeTintColor: '#3DDC84'
      }}
    >
      <Drawer.Screen name='Settings' component={SettingsScreen} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  )
}

export default SettingDrawer