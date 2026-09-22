import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Rlkdvl from './musica/Rlkdvl';
import NecessidadesPretas from './musica/NecessidadesPretas';
import SetorDeReciclagem from './musica/SetorDeReciclagem';
import QuebrandoTabu from './musica/QuebrandoTabu';
import Musica from './pages/Musica';

const Stack= createStackNavigator();

export default function RotasButtomMusica(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Musica" component={Musica} options= {{headerShown:false}} />
    <Stack.Screen name="Rlkdvl" component={Rlkdvl} options= {{ title: "Pecaos"}}/>
    <Stack.Screen name="NecessidadesPretas" component={NecessidadesPretas} options= {{ title: "Sant"}}/>
    <Stack.Screen name="SetorDeReciclagem" component={SetorDeReciclagem} options= {{ title: "Cassol"}}/>
    <Stack.Screen name="QuebrandoTabu" component={QuebrandoTabu} options= {{ title: "Leal"}}/>
  </Stack.Navigator>
  );
}