import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { StyleSheet, FlatList } from "react-native";

import colors from "../config/colors";
import navigationTheme from "../navigation/navigationTheme";
import routes from "../navigation/routes"

const listings = [
  {
    id: 1,
    title: "shoes for sale",
    image: require("../assets/hermes.png"),
  },
  {
    id: 2,
    title: "dogsfor sale",
    image: require("../assets/Rafablack.png"),
  },
];

function ListingsScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={()=>  navigation.navigate(routes.LISTING_DETAILS,item)}
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
