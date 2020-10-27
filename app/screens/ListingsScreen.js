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



function ListingsScreen({navigation}) {


const [listings,setListings ]= useState([])
const [error,setError] = useState(false)


useEffect(() => {

  loadListings()
  console.log()
 
}, [])

const loadListings = async () => {
const response = await listingsApi.getListings()

if(!response.ok) return setError(true)
setError(false)
setListings(response.data)
}



  return (
    <Screen style={styles.screen}>
      {error && <> 
        
        <AppText>Couldn't retrieve the listings</AppText>
        <AppButton title="Retry" onPress={loadListings} />
      
      </>}
      <FlatList
        data={listings}
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
