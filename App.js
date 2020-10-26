import React, { useState,useEffect } from "react";
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


 
export default function App() {

  
  return (

    

    <Screen>
     
      <ListingEditScreen  />
    </Screen>
   );
}
