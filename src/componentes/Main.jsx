import React from 'react';
import Constants from 'expo-constants'
import { View, Text } from 'react-native';
import RepositoriosLista from './RepositoriosLista.jsx';


const Main = () => {
    return(
        <View style = {{marginTop : Constants.statusBarHeight}}>
            <RepositoriosLista/>
        </View>
        
    )
}

export default Main;