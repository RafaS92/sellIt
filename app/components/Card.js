import React from "react";
import {
  View,
  StyleSheet,
  
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";
import {Image} from 'react-native-expo-image-cache'

function Card({ title, subTitle, imageUrl, onPress }) {

 
  

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} uri={imageUrl} alt="" />
        <View style={styles.detailsContainer}>
          <View style={styles.direction}>
          <Text style={styles.title} numberOfLines={1}>
            Item:
          </Text>
          <Text numberOfLines={1}>
          {title}
          </Text>

          </View>
          <View style={styles.direction}>
          <Text style={styles.title} numberOfLines={1}>
            Price:
          </Text>
          <Text style={styles.subTitle} numberOfLines={1} >
          {subTitle}
          </Text>

          </View>
          
          
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.green,
    marginBottom: 7,
    fontWeight: "500"
    
    
  },
  title: {
    marginBottom: 7,
    color: colors.black,
    fontWeight:"bold",
    

  }, direction:{
    flexDirection: "row"
  }
});

export default Card;
