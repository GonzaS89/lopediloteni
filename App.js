import { StatusBar } from 'expo-status-bar';
import Main from './src/componentes/Main.jsx'
import AppBar from './src/componentes/AppBar.jsx';
import {useFonts} from 'expo-font';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Primaria' : require('./assets/fuentes/MadimiOne-Regular.ttf'),
    'Secundaria' : require('./assets/fuentes/PermanentMarker-Regular.ttf'),
    'Terciaria' : require('./assets/fuentes/LuckiestGuy-Regular.ttf')
  })

  if(!fontsLoaded) {return undefined}
  return (
    <Main/>
    
    
  )
}


