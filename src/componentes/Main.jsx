import React from 'react';
import Constants from 'expo-constants'
import { View } from 'react-native';
import RepositoriosLista from './RepositoriosLista.jsx';
import AppBar from './AppBar.jsx';


const Main = () => {
    return(
        <View style = {{backgroundColor : '#C70039' , marginTop : Constants.statusBarHeight , height : '100%'}}>
            <AppBar/>
            <RepositoriosLista/>
        </View>
        
    )
}

export default Main;