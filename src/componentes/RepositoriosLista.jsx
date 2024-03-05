import {React , useState} from 'react'
import { FlatList, View, Text , Image , StyleSheet} from 'react-native'
import repositorios from '../data/repositorios.js';
import listaDeImagenes from '../data/listaDeImagenes.js';


const RepositoriosLista = () => {
    
    const listaDeRubros = [];

    repositorios.map(producto => 
        !listaDeRubros.includes(producto.rubro) && listaDeRubros.push(producto.rubro)
    )

    
    return (
        <View style = {{flex : 1 , width : '100%'}}>
        <FlatList 
            data={listaDeRubros}
            // ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item }) => (
                listaDeImagenes.map(imagen => 
                    item === imagen.nombre && 
                    <View  style = {estilosItems.containerItem }>
                    <Text style = {estilosItems.tituloItem}>{item}</Text>
                    <Image
                    style={estilosItems.imagen}
                    source = {{uri : imagen.url}} />
                </View>
                )
            )}
        />
        </View>
    )
}

const estilosItems = StyleSheet.create ({
    containerItem : {
        flex : 1,
        height: 200,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'black',
        borderWidth : 2,
    },
    tituloItem : {
        textAlign : 'center',
        color : 'black',
        fontSize : 40,
        textTransform : 'uppercase',
        fontFamily : 'Terciaria',
        position : 'relative',
        zIndex : 50,
        color : 'white',
        textShadowColor : 'black',
        textDecorationStyle : 'solid',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    imagen : {
        width : '100%',
        height : '100%',
        position : 'absolute',
        opacity : .35,
        backgroundColor : 'transparent'
    }
})




export default RepositoriosLista;