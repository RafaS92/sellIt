import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText/AppText";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText>I love papa </AppText>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "green",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });
