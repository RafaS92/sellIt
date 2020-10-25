import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import AppText from "./app/components/AppText";
// import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card title="Red jacket for sale" subTitle="100" />
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
