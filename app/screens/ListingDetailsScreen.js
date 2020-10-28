import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import Text from "../components/Text"
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Screen from '../components/Screen';
import { Image } from 'react-native-expo-image-cache';
import ContactSellerForm from "../components/ContactSellerForm";

function ListingDetailsScreen({route}) {

  const listing = route.params;
  console.log(listing.title)

  return (
    <KeyboardAvoidingView
    behavior="position"
    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      
      <Image style={styles.image} uri={listing.images[0].url} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.price}>${listing.price}</Text>
            <View style={styles.userContainer}>
              <ListItem
                image={require("../assets/Rafablack.png")}
                title="Rafael"
                subTitle="5 Listings"
                />
            </View>
            <ContactSellerForm listing={listing} />
         </View>

      
      
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "black"
  },
  price: {
    color: colors.green,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 8,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
