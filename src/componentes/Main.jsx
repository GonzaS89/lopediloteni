import React from 'react';
import Constants from 'expo-constants'
import { View, Text } from 'react-native';
import RepositoriosLista from './RepositoriosLista.jsx';


const Main = () => {
    return(
        <View style = {{marginTop : Constants.statusBarHeight , width : '100%' , backgroundColor : '#EADFB4'}}>
            <RepositoriosLista/>
        </View>
        
    )
}

export default Main;