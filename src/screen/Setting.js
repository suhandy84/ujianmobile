import React from 'react';
// import Center from './../component/Center';
import {
  Image,
  View
} from 'react-native';



export default function SettingsScreen() {
  return (
    <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={{uri : 'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png'}}
        style={{width: 150, height: 150}}
      />
    </View>
  );
}