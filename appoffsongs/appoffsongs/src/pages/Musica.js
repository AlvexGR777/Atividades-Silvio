import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Musica(props) {
  return(
    <View style={estilo.container}>
    <Text style={estilo.titulo}> As melhores músicas</Text>

    <FlatList
    data={musicas}
    renderItem={({ item })=>
    <View style={estilo.musicas}>
    <TouchableOpacity onPress={()=>{props.navigation.navigate(item.buttom)}}>
    <Text style={estilo.txtMusicas}> {item.nome} </Text>
    </TouchableOpacity>
    <View style={estilo.rede}>
    <Text style={estilo.curtidas}>
      <MaterialCommunityIcons
      name="thumb-up"
      size={20}
      color={'red'}
      />
      {item.like} Curtidas
      </Text>
      <Text style={estilo.reproducoes}>
      <MaterialCommunityIcons
      name="headphones"
      size={20}
      color={'blue'} 
      /> 
      {item.reproducoes} Reproduções
      </Text>
      </View>
       </View>
}
/>
</View>
  );
}

const musicas = [
  {
    uid:1,
    nome:'Rlkdvl',
    like: 5000,
    reproducoes: 10000,
    
  },

   {
    uid:2,
    nome:'NecessidadesPretas',
    like: 1500,
    reproducoes: 5000,
    
  },

  {
    uid:3,
    nome:'SetorDeReciclagem',
    like: 850,
    reproducoes: 3500,
    
  },

   {
    uid:4,
    nome:'QuebrandoTabu',
    like: 10000,
    reproducoes: 20000,
   
  },
];

const estilo = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#a4d2f7',
  },

  musicas: {
    backgroundColor: '#a2f5e9',
    justifyContent: 'center',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
  },

  titulo: {
   fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeigth: 700,
    marginVertical: 30,
  },

  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  txtMusicas: {
    fontSize: 20,
    marginVertical:15,
  },
});
