import React from 'react';
import { View , Image , StyleSheet} from 'react-native';

const AppBar = () => {
    return (
        <View style = {estiloAppBar.container}>
            <Image 
            style = {{height : 75 , width : 75 , marginTop : 20}}
            source={require('../iconos/logo-lokerilotene.png')}
            />
        </View>
    )
}

const estiloAppBar = StyleSheet.create ({
    container : {
        height : 100,
        backgroundColor : '#FFB534',
        alignItems : 'center',
        justifyContent : 'center'
    }
})

export default AppBar;