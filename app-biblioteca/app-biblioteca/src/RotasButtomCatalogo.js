import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Hobbit from './livros/Hobbit';
import OMundoDeSofia from './livros/OMundoDeSofia';
import PequenoPrincipe from './livros/PequenoPrincipe';
import PrisioneiroAzkaban from './livros/PrisioneiroAzkaban';
import Catalogo from './pages/Catalogo';

const Stack= createStackNavigator();

export default function RotasButtomCatalogo(){
  return(
    <Stack.Navigator
    screenOptions={{
    headerStyle: { backgroundColor: '#F5ECD9' },
    headerTintColor: '#4E342E',
    }}
>

    <Stack.Screen name="ListaLivros" component={Catalogo} options= {{headerShown:false}} />
    <Stack.Screen name="Hobbit" component={Hobbit} options= {{ title: "Hobbit"}}/>
    <Stack.Screen name="OMundoDeSofia" component={OMundoDeSofia} options= {{ title: "O Mundo De Sofia"}}/>
    <Stack.Screen name="PequenoPrincipe" component={PequenoPrincipe} options= {{ title: " Pequeno Principe"}}/>
    <Stack.Screen name="PrisioneiroAzkaban" component={PrisioneiroAzkaban} options= {{ title: " O Prisioneiro de Azkaban"}}/>
  </Stack.Navigator>
  );
}