import React from 'react'
import { FlatList, View, Text , StyleSheet} from 'react-native'
import RepositorioItem from './RepositorioItem.jsx'
import repositorios from '../data/repositorios.js'

const RepositoriosLista = () => {
    return (
        <View style = {{flex : 1 , width : '100%', paddingHorizontal : 30 , paddingVertical : 20}}>
        <FlatList 
            style = {estiloLista.containerLista}
            data={repositorios}
            ItemSeparatorComponent={() => <Text> </Text>}
            numColumns={2}
            renderItem={({ item : repo}) => (
                <RepositorioItem { ... repo}/>
            )}
        />
        </View>
    )
}

const estiloLista = StyleSheet.create ( {
    containerLista : {
        backgroundColor : '#EADFB4',
    }
})


export default RepositoriosLista;