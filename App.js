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
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignInScreen from './src/screens/signInScreen'
import FlashScreen from './src/screens/flashScreen'
import { AuthContext } from './src/shared/AuthContext';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const App: () => React$Node = () => {

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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Flash' component={FlashScreen} />
        <Stack.Screen name='signInScreen' component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
    </>
  );
};


export default App;
