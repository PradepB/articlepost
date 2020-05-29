import React from 'react'
import { View, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../shared/AuthContext'
import styles from '../assets/styles/signInScreenStyles'

export function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Avatar.Image
                            source={{
                                uri: 'https://res.cloudinary.com/pradepb/image/upload/v1590683234/Post_Artical_link/p1.png'
                            }}
                            size={50}
                        />
                        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                            <Title style={styles.title}>Pradep</Title>
                            <Caption style={styles.caption}>@pradepb</Caption>
                        </View>
                    </View>

   
                </View>

                <Drawer.Section>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => { props.navigation.navigate('Home') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="face-profile"
                                color={color}
                                size={size}
                            />
                        )}
                        label='Profile'
                    />


                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                // onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    )
}