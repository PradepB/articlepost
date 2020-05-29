/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { DrawerContent } from './src/screens/drawerContent'
import SignInScreen from './src/screens/signInScreen'
import FlashScreen from './src/screens/flashScreen'
import HomeScreen from './src/screens/homeScreen'
import { AuthContext } from './src/shared/AuthContext';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const App: () => React$Node = () => {


  createHomeStack = ({navigation}) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#009387"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen} 
          options={{
            title: 'Overview',
            headerLeft: () => (
              <Icon.Button name="menu" size={25} backgroundColor="#009387"
                onPress={() => navigation.openDrawer()}></Icon.Button>
            )
          }}

        />
      </Stack.Navigator>
    )
  }

  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)
  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('pradep')
      setIsLoading(false)
    },

    signUp: () => {
      setUserToken('pradep')
      setIsLoading(false)
    },

    signOut: () => {
      setUserToken('pradep')
      setIsLoading(false)
    }
  }))

  return (
    <>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>

          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name='Home'   children={createHomeStack} />
          </Drawer.Navigator>

          {/* <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387"
             onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} /> */}

          {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Flash' component={FlashScreen} />
        <Stack.Screen name='signInScreen' component={SignInScreen} />
      </Stack.Navigator> */}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
};


export default App;
