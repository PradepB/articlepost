import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Appbar } from 'react-native-paper';

const HomeScreen = (props) => {
    return (
        <>
            <StatusBar backgroundColor="#009387" barStyle='light-content' />
            <View>
                <Text>
                    hello
            </Text>
            </View>
        </>
        //     <Appbar.Header>
        //     <Appbar.BackAction
        //     onPress={() => { alert('Back Pressed') }}
        //     />
        //     <Appbar.Content
        //       title="Title"
        //       subtitle="Subtitle"
        //     />
        //     <Appbar.Action icon="magnify"  />
        //     <Appbar.Action icon="dots-vertical" />
        //   </Appbar.Header>
    )
}

export default HomeScreen