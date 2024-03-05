import React from 'react';
import { View , Image , StyleSheet} from 'react-native';

const AppBar = () => {
    return (
        <View style = {estiloAppBar.container}>
            <Image 
            style = {{height : 85 , width : 85}}
            source={require('../iconos/logo-lokerilotene.png')}
            />
        </View>
    )
}

const estiloAppBar = StyleSheet.create ({
    container : {
        height : 80,
        backgroundColor : '#FFB534',
        alignItems : 'center',
        justifyContent : 'center'
    }
})

export default AppBar;