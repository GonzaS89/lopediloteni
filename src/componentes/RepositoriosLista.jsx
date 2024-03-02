import React from 'react'
import { FlatList, View, Text , StyleSheet} from 'react-native'
import RepositorioItem from './RepositorioItem.jsx'
import repositorios from '../data/repositorios.js'

const RepositoriosLista = () => {
    return (
        <FlatList
            data={repositorios}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item : repo}) => (
                <RepositorioItem { ... repo}/>
            )}
        />
    )
}




export default RepositoriosLista;