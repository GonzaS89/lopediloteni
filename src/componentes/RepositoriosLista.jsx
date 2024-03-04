import {React , useState} from 'react'
import { FlatList, View, Text , StyleSheet} from 'react-native'
import RepositorioItem from './RepositorioItem.jsx'
import repositorios from '../data/repositorios.js'

const RepositoriosLista = () => {

    const [listaRubros, setListaRubros] = useState ()
    return (
        <View style = {{flex : 1 , width : '100%', paddingHorizontal : 30 , marginTop : 20}}>
        <FlatList 
            style = {estiloLista.containerLista}
            data={repositorios}
            // ItemSeparatorComponent={() => <Text> </Text>}
            numColumns={2}
            renderItem={({ item : repo}) => (
                console.log(repo),
                <RepositorioItem { ... repo}/>
            )}
        />
        </View>
    )
}

const estiloLista = StyleSheet.create ( {
    containerLista : {
        backgroundColor : '#124076'
    }
})


export default RepositoriosLista;