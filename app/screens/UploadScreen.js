import { View,StyleSheet, Modal } from 'react-native'
import Text from '../components/Text'
import React from 'react';
import * as Progress from 'react-native-progress'
import { color } from 'react-native-reanimated';
import  LottieView  from 'lottie-react-native';





export default function UploadScreen({onDone, progress = 0, visible = false}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
               {progress < 1 ? <Progress.Bar color={color.green} progress={progress} width={200}  /> : <LottieView
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