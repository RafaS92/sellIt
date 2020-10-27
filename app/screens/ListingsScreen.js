import React,{useState,useEffect} from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { StyleSheet, FlatList } from "react-native";



import colors from "../config/colors";
import navigationTheme from "../navigation/navigationTheme";
import routes from "../navigation/routes"
import listingsApi from "../api/listings"
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';



function ListingsScreen({navigation}) {

  const getListingsApi = useApi(listingsApi.getListings)




useEffect(() => {

  getListingsApi.request(1,2,3)
  
 
}, [])




  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && <> 
        
        <AppText>Couldn't retrieve the listings</AppText>
        <AppButton title="Retry" onPress={loadListings} />
      
      </>}
      <ActivityIndicator visible={getListingsApi.loading}></ActivityIndicator>
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          
          <Card
          title={item.title}
          subTitle={"$" + item.price}
          imageUrl={item.images[0].url}
          onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
