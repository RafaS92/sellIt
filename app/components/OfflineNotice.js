import React from 'react';
import { View,StyleSheet } from 'react-native'
import colors from '../config/colors';
import Text from './Text'
import Constants from 'expo-constants';
import {useNetInfo} from '@react-native-community/netinfo'





export default function OfflineNotice() {

  const netInfo = useNetInfo()

  if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No Internet Connection</Text>
        </View>
    )
    return null
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.danger,
        height: 50,
        width: "100%",
        position: 'absolute',
        top: Constants.statusBarHeight,
        zIndex: 1
    },
    text:{
        color: colors.white
    }
})