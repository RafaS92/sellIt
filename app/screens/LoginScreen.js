import React from 'react';
import { StyleSheet,Image } from 'react-native'
import AppTextInput from '../components/AppTextInput';
import {Formik} from 'formik'

import Screen from '../components/Screen'
import { useState } from 'react';
import AppButton from '../components/AppButton';


function LoginScreen(props) {

    

    return (
       <Screen style={styles.container}>

           <Image 
            style={styles.logo}
           source={require("../assets/hermes.png")}/>
           <Formik
           initialValues={{email:'', password:''}}
           onSubmit={values => console.log(values)}
           >
               {({handleChange,handleSubmit})=>(
             <>
                <AppTextInput
                autoCapitalize="none"
                icon="email"
                placeholder="Email"
                autonCorrect={false}
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                textContentType="emailAddress"
                />
                <AppTextInput
                autoCapitalize="none"
                autonCorrect={false}
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Password"
                textContentType="password"
                secureTextEntry
                />
                <AppButton 
                title="Login"
                onPress={handleSubmit}
                
                />
             </>
               ) }
           </Formik>
       
       </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom:20
    }
})

export default LoginScreen;