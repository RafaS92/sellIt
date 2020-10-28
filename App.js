import React, { useState,useEffect,useNetInfo } from "react";
import { Text, View,Switch, Button, ImagePickerIOS, Image } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import ListItem from "./app/components/ListItem";
// import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import  ListingDetailsScreen from "./app/screens/ListingDetailsScreen"
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { TextInput } from "react-native-gesture-handler";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack'

import AppNavigator from './app/navigation/AppNavigator';
import {navigationRef} from './app/navigation/rootNavigation'




import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigator from "./app/components/navigation/AuthNavigator";
import navigationTheme from "./app/components/navigation/navigationTheme"
import NetInfo from '@react-native-community/netinfo'
import AsyncStorage from '@react-native-async-storage/async-storage';
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from './app/auth/context';
import authStorage from "./app/auth/storage"
import jwtDecode from 'jwt-decode'
import {AppLoading} from 'expo'





// const Stack = createStackNavigator()

// const StackNavigator = () =>(
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle:{backgroundColor: "blue"},headerTintColor: "white"

//     }}
//   >
//     <Stack.Screen name="Tweets" component={Tweets} />
//     <Stack.Screen name="TweetDetails" component={TweetDetails} options={{headerStyle:{backgroundColor: "gold"},headerTintColor: "white", headerShown: false}} />
//   </Stack.Navigator>
// )

// const Account = () => <Screen><Text>Account</Text></Screen>

// const Tab = createBottomTabNavigator()
// const TabNavigator = () =>(
//   <Tab.Navigator>
//     <Tab.Screen  name="Feed" component={Tweets}  options={{tabBarIcon: ({size,color}) => <MaterialCommunityIcons name="home" size={size} color={color} /> }} />
//     <Tab.Screen name="Account" component={Account} />
//   </Tab.Navigator>

// )
 
export default function App() {
  const [user,setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async() => {
    const user = await authStorage.getUser()
    if(user) setUser(user)
    }

  if(!isReady)
  return <AppLoading startAsync={restoreUser} onFinish={()=> setIsReady(true)}  />

  return (
  <AuthContext.Provider value={{user,setUser}}>
    <OfflineNotice />
     <NavigationContainer ref={navigationRef} theme={navigationTheme}>
       {user ? <AppNavigator /> : <AuthNavigator />}
        
     </ NavigationContainer>
  </ AuthContext.Provider>
  );
}
