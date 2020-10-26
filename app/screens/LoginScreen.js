import React from 'react';
import { StyleSheet,Image } from 'react-native'
import AppTextInput from '../components/AppTextInput';
import { Formik} from 'formik'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppButton from '../components/AppButton';
import ErrorMessage from '../components/ErrorMessage';

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
               {({handleChange,handleSubmit,errors,setFieldTouched, touched})=>(
             <>
                <AppTextInput
                autoCapitalize="none"
                icon="email"
                placeholder="Email"
                autonCorrect={false}
                onBlur={()=> setFieldTouched("email") }
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                textContentType="emailAddress"
                />
                <ErrorMessage error={errors.email} visible={touched.email} />
                <AppTextInput
                autoCapitalize="none"
                autonCorrect={false}
                onBlur={()=> setFieldTouched("password") }
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Password"
                textContentType="password"
                secureTextEntry
                />
                <ErrorMessage error={errors.password}  visible={touched.password}/>
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