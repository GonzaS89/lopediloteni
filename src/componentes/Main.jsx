import React from 'react';
import Constants from 'expo-constants'
import { View, Text } from 'react-native';
import RepositoriosLista from './RepositoriosLista.jsx';
import AppBar from './AppBar.jsx';


const Main = () => {
    return(

        <View style = {{width : '100%' , backgroundColor : '#EE4266', marginTop : Constants.statusBarHeight}}>
            <AppBar/>
            <RepositoriosLista/>
        </View>
        
    )
}

export default Main;