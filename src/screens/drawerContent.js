import React from 'react'
import {View,Text} from 'react-native'
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer'
import { Avatar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext} from '../shared/AuthContext'

export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <Text>
                demo
            </Text>
        </View>
    )
}