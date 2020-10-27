import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      //   blurRadius={2}
      style={styles.background}
      source={{
        uri:
          "https://images.pexels.com/photos/861102/pexels-photo-861102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      }}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri:
              "https://i2.wp.com/freepngimages.com/wp-content/uploads/2015/11/red-sale-transparent-background.png?fit=600%2C600",
          }}
        />
        <Text style={styles.tagline}>Sell here</Text>
      </View>
      <View style={styles.buttonsContainer}>

        <AppButton title="Login" onPress={()=> navigation.navigate("Login")}  />
        <AppButton title="Register" color="secondary" onPress={()=> navigation.navigate("Register")} />

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "black",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
