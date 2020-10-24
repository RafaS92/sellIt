import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  SafeAreaSafeAreaView,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress()}>
        {" "}
        papa lorem100phi hfgiph spgpi ship hip hpivsidp' fiihg hipvafphipsg ipsh
        g jkeksafkash'gf hahd ha ihpdahs gfh psih ghxf gphx fgihp{" "}
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});
