import React, { useState } from "react";
import { View, TextInput, StyleSheet,Modal, TouchableWithoutFeedback,Button, FlatList  } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles"
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';


function AppPicker({ icon,placeholder,items,onSelectItem,selectedItem,...otherProps}) {

    const[modalVisible,setModalVisible] = useState(false)




  return (
      <>


    <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.gray} style={styles.icon} />}
      <TextInput style={defaultStyles.text} {...otherProps}/>
  <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
  <MaterialCommunityIcons name={"chevron-down"} size={20} color={colors.gray}  />
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType="slide">
        <Screen>
        <Button title="Close" onPress={()=> setModalVisible(false)} />
        <FlatList
        data={items}
        keyExtractor={item => item.value.toString()}
        renderItem={({item}) => <PickerItem
        label={item.label}
        onPress={()=>{
            setModalVisible(false)
            onSelectItem(item)
        } }
        /> }
        />
        </Screen>
    </Modal>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  text:{
      flex: 1
  },
  
  icon:{
    marginRight: 10
  }
});

export default AppPicker;
