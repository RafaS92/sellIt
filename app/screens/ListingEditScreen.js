import React,{useState} from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import * as Yup from "yup";


import {
  AppForm ,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings"
import UploadScreen from "./UploadScreen";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1,"Please selected at least one image")
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen() {
const[uploadVisible, setUploadVisible] =  useState(false)
const [progress, setProgress] = useState(0)

   const location = useLocation()

   const handleSubmit = async (listing, { resetForm } )=> {
    setProgress(0)
    setUploadVisible(true)


    const result = await listingsApi.addListing({...listing, location},
      progress => setProgress(progress)
      )

   
    if(!result.ok){
      setUploadVisible(false)
      return alert('Could not save the listing.');
    } 

    resetForm()
    
   }

  return (
      <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={{
        uri:
          "https://cdn2.f-cdn.com/contestentries/68791/9261050/5337f7fab2996_thumb900.jpg",
      }}
      style={styles.container}
      >
      <UploadScreen on={() => setUploadVisible(false)} progress={progress} visible={uploadVisible} />
    
      

      
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: []
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        
      >
        <FormImagePicker  name="images" style={styles.pic} />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker numberOfColumns={3} items={categories} name="category" placeholder="Category" width="50%" PickerItemComponent={CategoryPickerItem}/>
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: "100%"
    
  }, background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  form: {
    
    padding: 10,
  },
  pic:{
      flex: 1,
      justifyContent:"center",
      alignItems: "center"
  }
});
export default ListingEditScreen;
