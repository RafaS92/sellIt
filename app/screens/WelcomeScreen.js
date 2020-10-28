import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import routes from "../navigation/routes";
import AppButton from "../components/AppButton";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      //   blurRadius={2}
      style={styles.background}
      source={{
        uri:
          "https://images.pexels.com/photos/3762925/pexels-photo-3762925.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      }}
    >
      <View style={styles.logoContainer}>
      <Image 
            style={styles.logo}
           source={require("../assets/Sellit.png")}/>
        
      </View>
      <View style={styles.buttonsContainer}>

        <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)}/>
        <AppButton title="Register" color="secondary" onPress={()=> navigation.navigate(routes.REGISTER)} />

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
    width: 240,
    height: 120,
    
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "800",
    paddingVertical: 5,
    color: "gold"
  
  },
});

export default WelcomeScreen;
