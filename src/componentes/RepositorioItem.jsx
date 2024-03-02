import React from 'react';
import { View , Text , StyleSheet} from 'react-native';

const RepositorioItem =  (props) => (
    
    <View key={props.id} 
    style={estilos.container}> 
        <Text>Oferta : {props.nombre}</Text>
        <Text>Precio : {props.precio}</Text>
        <Text>Comercio : {props.comercio}</Text>
        <Text>Rubro : {props.rubro}</Text>
    </View> 
)

const estilos = StyleSheet.create ({
    container : {
        backgroundColor : 'red'
    }
})

export default RepositorioItem;