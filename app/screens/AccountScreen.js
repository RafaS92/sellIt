import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My messages",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Rafa"
          subTitle="love@gmail.com"
          image={require("../assets/hermes.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList data={} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
