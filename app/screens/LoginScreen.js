import React from 'react';
import { StyleSheet,Image } from 'react-native'
import AppTextInput from '../components/AppTextInput';
import { Formik} from 'formik'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppButton from '../components/AppButton';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema= Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    

    return (
       <Screen style={styles.container}>

           <Image 
            style={styles.logo}
           source={require("../assets/hermes.png")}/>
           <Formik
           initialValues={{email:'', password:''}}
           onSubmit={values => console.log(values)}
           validationSchema={validationSchema}
           >
               {()=>(
             <>
                <AppFormField
                autoCapitalize="none"
                icon="email"
                name="email"
                placeholder="Email"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                />
                
                <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                placeholder="Password"
                textContentType="password"
                secureTextEntry
                />
                
               <SubmitButton title="Login" />
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