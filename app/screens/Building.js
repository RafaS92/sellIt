import React from 'react';
import { View,StyleSheet,ImageBackground ,Image, Text} from 'react-native'




export default function other() {
    return (
        <ImageBackground
        blurRadius={0}
        style={styles.background}
        source={{
          uri:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgIBwcHCAcIBwcHBwoHBwcHBw8ICQcWFREWFiARHx8YHCggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAS0ApwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD1wVABQEFAQUBBQEFAQUBBQEFAQXDAQVAaAAAAFQAUBBQEFQBFXAQVABQEFARGkBRQEFAQxQEFAQUBBQEFAQUBBQEFAQUABQQUBBQEFAQUAABFAAAAAAAAAAUBBQEUAAAAAAAAABUABQQAAUBAABQEFAAAAAAAAUEFAQUBBQEUAQAAFBBQEFAAAAAAAAAAAAAAAAAAAAAAAAABQEUAAAAAAAEUBAAAUEVFAAAAAAAFAQABQAAAABkUAAAAAAABQAAAAAAAAAUAAGQAAAAAFAAAAAAFARQAAAFBBQGAAAUEUAAAAAFiKAAAAAoAAAAAwAAoAAAAAKigAAAoAAAAAKCCgOaooAAAACosAAAAAVFAAABYCKAAAOaosAAAAAWAAAAAAqKAAAQAUAAAHNUAUAAAFgigAAAAKAAAAACooAAOYAKEAAAFRQAAAAURQAAAAFRQAAcwAFRYAAAACiKAAAACiKAAAAAqAMAAAAoAAACoAoAAAAAKIoAAAAP/2Q==",
        }}
      >
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{uri: "https://lh3.googleusercontent.com/proxy/u6_MDEjDofZXN_PxGKmK4qtbAV4byUqJnpJnFvdmkEdsz9AAQ9NkNHG8m-oWkAdMDkkbWvESj9v-TNdACGsLjnig49zmFyQhxeQMC1HXX0FO8n9SIQGnvqlax4qYT6XjnDHwUoEio17KLeKTiKLL457Xp7Btn1t93MKY"}} />
        </View>
        <View style={styles.buttonsContainer}>
            <Text style={styles.text} >We are working on this feature.</Text>
  
        </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    buttonsContainer: {
      padding: 20,
      width: "70%",
      marginBottom: 180,
      fontWeight: "bold",
      
      
    }, text:{
        fontWeight: "bold",
        fontSize: 20
        
    },
    logo: {
      width: 310,
      height: 280,
      
    },
    logoContainer: {
      position: "absolute",
      top: 30,
      marginTop: 60
    },
    tagline: {
      fontSize: 25,
      fontWeight: "800",
      paddingVertical: 5,
      color: "gold"
    
    }
    
  });





