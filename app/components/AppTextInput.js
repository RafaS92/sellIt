import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles"

function AppTextInput({ icon,width,...otherProps}) {
  return (
    <View style={[styles.container,{width}]}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.gray} style={styles.icon} />}
      <TextInput placeholderTextColor={colors.gray} width="100%" style={defaultStyles.text} {...otherProps}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  
  icon:{
    marginRight: 10
  }
});

export default AppTextInput;
