import React, { useContext } from 'react';
import { View, StyleSheet,AsyncStorage } from 'react-native';
import {Authcontext} from './../context/Authcontext'
import { Button } from 'react-native-elements';

const Logout = () => {
    const {signinout}=useContext(Authcontext)


    return (
        <View style={styles.container}>
            <View>
                <Button 
                    title="LOGOUT"
                    onPress={ async ()=>{
                        await AsyncStorage.removeItem('login')
                        signinout()
                      }}
                    containerStyle={{
                        alignItems: 'center'
                    }}
                    buttonStyle={{
                        backgroundColor: '#3DDC84',
                        width: '55%'
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Logout;