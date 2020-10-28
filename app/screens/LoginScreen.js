import React,{useState} from 'react';
import { StyleSheet,Image } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import {ErrorMessage,AppFormField,AppForm,SubmitButton} from "../components/forms"
import authApi from "../api/auth";
import jwtDecode from 'jwt-decode'

const validationSchema= Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    // const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);


    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        // auth.logIn(result.data);
        const user = jwtDecode(result.data)
        console.log(user)
      };
    

    

    return (
       <Screen style={styles.container}>

           <Image 
            style={styles.logo}
           source={require("../assets/hermes.png")}/>
           <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
           <AppForm
           initialValues={{email:'', password:''}}
           onSubmit={handleSubmit}
           validationSchema={validationSchema}
           >
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
             
           </AppForm>
       
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