import { View,StyleSheet, Modal } from 'react-native'
import React from 'react';
import * as Progress from 'react-native-progress'
import colors from "../config/colors";
import  LottieView  from 'lottie-react-native';





export default function UploadScreen({onDone, progress = 0, visible = false}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
               {progress < 1 ? <Progress.Bar color={colors.green} progress={progress} width={200}  /> : <LottieView
            autoPlay
            loop={false}
            source={require('../assets/animations/done.json')}
            style={styles.animation}
            onAnimationFinish={onDone}
            
               />}
                    
                
                
            </View>
        </Modal>
        )

}


const styles = StyleSheet.create({
    animation:{
        width: 150
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1

    }
})