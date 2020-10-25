import React, { useState } from "react";
import { Text, View,Switch } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListItem from "./app/components/ListItem";
// import AppText from "./app/components/AppText";
// import AppButton from "./app/components/AppButton";
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

 const categories=[
   {label: "furniture",value:1,},
   {label: "shoes",value:2,},
   {label: "sweater",value:3,}
 ]

export default function App() {
  const [firstname, setFirstName] = useState("");

  return (
    <Screen>
<AppPicker items={categories} icon="apps" placeholder="Category" />
<AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
