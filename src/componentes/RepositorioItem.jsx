import React from 'react';
import { View , StyleSheet} from 'react-native';
import EstilosTexto from './EstilosTexto.jsx';

const RepositorioItem =  (props) => (
    
    <View key={props.id} style = {estilosItems.containerItem }>
        <EstilosTexto negro negrita mayuscula>{props.nombre}</EstilosTexto>
        <EstilosTexto negrita textoNegro>{props.precio}</EstilosTexto>
        <EstilosTexto letraChica>{props.comercio}</EstilosTexto>
        <EstilosTexto letraChica>{props.rubro}</EstilosTexto>
    </View> 
)

const estilosItems = StyleSheet.create ({
    containerItem : {
        flex : 1,
        height: 200,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 10,
        border : '2px solid',
        backgroundColor : '#F4EDCC'
    },
    tituloItem : {
        textAlign : 'center'
    }
})


export default RepositorioItem;