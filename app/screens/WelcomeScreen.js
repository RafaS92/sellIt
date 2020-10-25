import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
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
        <Text>Sell here</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
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
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
