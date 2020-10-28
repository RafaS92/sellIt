import React from "react";
import { View,StyleSheet} from "react-native";
import Text from "../components/Text"


// import Text from "../components/Text";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Screen from '../components/Screen';
import { Image } from 'react-native-expo-image-cache';

function ListingDetailsScreen({route}) {

  const listing = route.params;
  console.log(listing.title)

  return (
    <View>
      
      <Image style={styles.image} uri={listing.images[0].url} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/Rafablack.png")}
          title="Rafael"
          subTitle="5 Listings"
        />
      </View>


      
      
    </View>
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
