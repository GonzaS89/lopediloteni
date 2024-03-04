import React from 'react';
import {Text , StyleSheet} from 'react-native';

const estilos= StyleSheet.create ({
    texto : {
        fontSize : 12,
        color : 'grey'
    },
    negrita : {
        fontWeight : 'bold',
    },
    textoAzul : {
        color : 'blue'
    },
    textoNegro :{
        color : 'black'
    },
    letraGrande : {
        fontSize : 20
    },
    letraChica : {
        fontSize : 10
    },
    mayuscula : {
        textTransform : 'uppercase'
    }
})

export default function EstilosTexto ({children , negrita , azul , letraGrande , letraChica, mayuscula, negro}) {

    const textoEstilo = [
        estilos.texto,
        azul && estilos.textoAzul,
        negrita && estilos.negrita,
        letraGrande & estilos.letraGrande,
        letraChica && estilos.letraChica,
        mayuscula && estilos.mayuscula,
        negro && estilos.textoNegro
    ]

    return (
        <Text style = {textoEstilo}>{children}</Text>
    )
}