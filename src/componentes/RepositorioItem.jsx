import React from 'react';
import { View } from 'react-native';
import EstilosTexto from './EstilosTexto.jsx';

const RepositorioItem =  (props) => (
    
    <View key={props.id} style = {{padding : 10}}>
        <EstilosTexto negro negrita mayuscula>Oferta : {props.nombre}</EstilosTexto>
        <EstilosTexto negrita textoNegro>Precio : {props.precio}</EstilosTexto>
        <EstilosTexto letraChica>Comercio : {props.comercio}</EstilosTexto>
        <EstilosTexto letraChica>Rubro : {props.rubro}</EstilosTexto>
    </View> 
)


export default RepositorioItem;