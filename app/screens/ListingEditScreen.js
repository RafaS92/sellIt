import React from "react";
import { StyleSheet } from "react-native";
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

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1,"Please selected at least one image")
});

const categories = [
  { label: "chocos", value: 1, backgroundColor:"red", icon:'apps' },
  { label: "Clothing", value: 2,backgroundColor:"blue", icon:'apps' },
  { label: "Cameras", value: 3,backgroundColor:"green", icon:'email' },
];

function ListingEditScreen() {

   const location = useLocation()

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: []
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
