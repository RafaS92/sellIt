import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";
import { StyleSheet, View } from 'react-native';

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
    <View style={styles.pic} >
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
        style={styles.pic2}
      />
    </ View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}


const styles = StyleSheet.create({
  pic:{
    flex: .4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row",
    marginTop: 30,
    marginBottom:10,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    backgroundColor: "rgba(228, 224, 224, 0.582)",
    height: 100,
    width:"100%",
    borderRadius: 5,
    
  },
  pic2:{
    position: "relative",
    top: 30

  }
})

export default FormImagePicker;
