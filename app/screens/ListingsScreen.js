import React, {useEffect,useState} from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { StyleSheet, FlatList } from "react-native";

import listingApi from '../api/listings'
import colors from "../config/colors";
import navigationTheme from "../navigation/navigationTheme";



function ListingsScreen({navigation}) {

const [listings,setListings] = useState([])


useEffect(() => {
  loadListings()
}, [])


const loadListings = async() =>{
 const response = await listingApi.getListings()
 setListings(response.data)
}

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            imageUrl={item.images[0].url}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGray,
  },
});

export default ListingsScreen;
