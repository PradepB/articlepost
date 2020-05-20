import React, { Component } from 'react'
import {
    View, TouchableOpacity,
    Text, TextInput
} from 'react-native';
import styles from '../assets/styles/signInScreenStyles'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

import {AuthContext} from '../shared/AuthContext'

const SignInScreen = ({ navigation }) => {
    const [data, setData] = React.useState({
        email: "",
        paswword: "",
        check_InputTextchnage: false,
        secureTextEntry: true
    })
    const inputTextChnage = (val) => {

        if (val.length > 5) {
            setData({
                ...data,
                email: val,
                check_InputTextchnage: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_InputTextchnage: false
            })
        }
    }
    const passwordChange = (val) => {
        setData({
            ...data,
            paswword: val,
        })
    }
    const passwordView = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const { signIn } = React.useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Text animation="fadeInDownBig" style={styles.text_Header}>Welcome!</Animatable.Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20} />

                    <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"
                        placeholder="Enter Your Email"
                        returnKeyType={"next"}
                        onChangeText={(val) => { inputTextChnage(val) }}
                    />
                    {data.check_InputTextchnage ?
                        <Feather
                            name="check-circle"
                            color='green'
                            size={20} />
                        : null}
                </View>

                <Text style={[styles.text_footer, { marginTop: 5 }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20} />

                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        autoCapitalize="none"
                        placeholder="Enter Your Password"
                        onChangeText={(val) => { passwordChange(val) }}
                    />
                    <TouchableOpacity
                        onPress={passwordView}
                    >{data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color='grey'
                            size={20} />
                        :
                        <Feather
                            name="eye"
                            color='grey'
                            size={20} />}
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {
                            signIn()
                        }}>
                        <LinearGradient colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn} >
                            <Text style={[styles.textSign, { color: "#fff" }]}>SignIn</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]} onPress={() => {

                        navigation.navigate("signUpScreen")

                    }}>
                        <Text style={[styles.textSign, { color: '#009387' }]}> SignUp</Text>
                    </TouchableOpacity>

                </View>

            </Animatable.View>
        </View>
    )
}

export default SignInScreen