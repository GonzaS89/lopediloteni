import React from 'react';
import { View , Text } from 'react-native';

const RepositorioItem =  (props) => (
    
    <View key={props.id} 
    style={{padding : 20,paddingBottom : 5, paddingTop : 5}}> 
        <Text>Oferta : {props.nombre}</Text>
        <Text>Precio : {props.precio}</Text>
        <Text>Comercio : {props.comercio}</Text>
        <Text>Rubro : {props.rubro}</Text>
    </View>
)

export default RepositorioItem;