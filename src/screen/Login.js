import React, { useContext, useReducer } from 'react';
import Center from './../component/Center';
import {
    Text,
    Button,
    AsyncStorage
} from 'react-native';
import { Authcontext } from './../context/Authcontext'
import { Input } from 'react-native-elements';
// import Home from './../screen/Home'
// import TabNav from './../navigation/TabNav'

const reducers = (state, action) => {
    switch (action.type) {
        case 'Change-data':
            return { ...state, [action.name]: action.payload };
        case 'Initial_State':
            return { username: '' }
        default:
            return state
    }
}

const Login = ({ navigation }) => {
    const {signinout} =useContext(Authcontext)
    const [state, dispatch] = useReducer(reducers, { username: '' })

    return (
        <Center>
            <Input
                placeholder='Username'
                onChangeText={(text) => dispatch({ type: 'Change-data', name: 'username', payload: text })}
            />
            <Button
                title='Login'
                color='#3DDC84'
                onPress={() => {
                    AsyncStorage.setItem('login', 'iya')
                        .then(() => {
                            signinout()
                        })
                }}
            />
        </Center>
    )
}

export default Login;