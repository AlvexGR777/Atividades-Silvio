import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Pecaos from './artista/Pecaos';
import Sant from './artista/Sant';
import Cassol from './artista/Cassol';
import Leal from './artista/Leal';
import Artista from './pages/Artista';

const Stack= createStackNavigator();

export default function RotasButtomArtista(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Artista" component={Artista} options= {{headerShown:false}} />
    <Stack.Screen name="Pecaos" component={Pecaos} options= {{ title: "Pecaos"}}/>
    <Stack.Screen name="Sant" component={Sant} options= {{ title: "Sant"}}/>
    <Stack.Screen name="Cassol" component={Cassol} options= {{ title: "Cassol"}}/>
    <Stack.Screen name="Leal" component={Leal} options= {{ title: "Leal"}}/>
  </Stack.Navigator>
  );
}