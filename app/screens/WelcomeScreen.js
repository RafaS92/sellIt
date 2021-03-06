import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import routes from "../navigation/routes";
import LoginButton from "../components/LoginButton";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={0}
      style={styles.background}
      source={{
        uri:
          "https://i.pinimg.com/originals/98/fe/17/98fe17ea1b5395b50fed0b26c95c95ce.jpg",
      }}
    >
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/Sellit.png")} />
      </View>
      <View style={styles.buttonsContainer}>

        <LoginButton title="Login" textcolor color="trans"  onPress={() => navigation.navigate(routes.LOGIN)}/>
        <LoginButton title="Register" color="trans" onPress={()=> navigation.navigate(routes.REGISTER)} />

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
    marginBottom: 180
  },
  logo: {
    width: 240,
    height: 120,
    
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
    marginTop: 200
  },
  tagline: {
    fontSize: 25,
    fontWeight: "800",
    paddingVertical: 5,
    color: "gold"
  
  }
  
});

export default WelcomeScreen;
