import React,{useState,useEffect} from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { StyleSheet, FlatList, ImageBackground } from "react-native";



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
    <>
    <ActivityIndicator visible={getListingsApi.loading} />
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={{
        uri:
          "https://cdn2.f-cdn.com/contestentries/68791/9261050/5337f7fab2996_thumb900.jpg",
      }}
      style={styles.container}
      >
    
      {getListingsApi.error && <> 
        
        <AppText>Couldn't retrieve the listings</AppText>
        <AppButton title="Retry" onPress={loadListings} />
      
      </>}
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
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 20
  },
  image:{
    height: 80,
    width: 80,
    marginRight:20
  }

});


export default ListingsScreen;
