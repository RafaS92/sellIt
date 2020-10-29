import React from "react";
import { StyleSheet, FlatList, View,Text, Image } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import routes from "../navigation/routes";
import useAuth from '../auth/useAuth';

const menuItems = [
  {
    Id:1,
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.BUILDING,
  },
  { id: 2,
    title: "My messages",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({navigation}) {

  const {user, logOut} = useAuth()

  
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.container2} >
          <Image style={styles.image} source={require("../assets/user2.png")}  />
          <View style={styles.textContainer}>
          <Text style={styles.text2}>
          Welcome {user.name} !
          </Text>
          <Text>
          {user.email}
          </Text>


          </View>
        </View>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={()=> navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>

      <View>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
          onPress={()=> logOut()}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  container2: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
    
  },
  screen: {
    backgroundColor: colors.lightGray,
  }, 
  image:{
    height: 80,
    width: 80,
    marginRight:20
  },
  text2:{
    fontWeight: "bold",
    fontSize: 19
  },
  textContainer:{
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AccountScreen;
