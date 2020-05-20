import React from 'react'
import {
    StatusBar,
    View,
    TouchableOpacity,
    Text, Image
} from 'react-native'
import styles from '../assets/styles/flashScreenStyles'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
const img = require("../assets/images/security.png")
const FlashScreen = ({navigation}) => {
    return (
        <>
            <StatusBar backgroundColor="#009387" barStyle="dark-content" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Animatable.Image animation='fadeInDownBig' style={styles.logo} source={img} />
                </View>
                <Animatable.View style={styles.footer} animation="fadeInUpBig">
                    <Text style={styles.title}>
                        Stay connected with everyone!
                    </Text>
                    <Text style={styles.text}>
                        Sign in with acount
                    </Text>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => { navigation.navigate("signInScreen") }} >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn} >
                                <Text style={styles.textSign}>Get Started</Text>
                                <MaterialIcons
                                    name="navigate-next"
                                    color="#fff"
                                    size={20}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View >
            </View>
        </>
    )

}

export default FlashScreen

