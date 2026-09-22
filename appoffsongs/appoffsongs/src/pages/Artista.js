import * as React from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Artista(props) {
  return(
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Os melhores Artistas</Text>

    <FlatList
    data={artistas}

    renderItem={({ item })=>
    <View style={estilo.artista}>
    <TouchableOpacity onPress={()=>{props.navigation.navigate(item.buttom)}}>
    <Text style={estilo.txtArtista}> {item.nome} </Text>
    </TouchableOpacity>
    <View style={estilo.rede}>
    <Text style={estilo.curtidas}>
      <MaterialCommunityIcons
      name="thumb-up"
      size={20}
      color={'#F00'}
      />
      {item.like} Curtidas
      </Text>
      <Text style={estilo.seguidores}>
      <MaterialCommunityIcons
      name="account-heart"
      size={20}
      color={'blue'} 
      /> 
      {item.seguidores} Seguidores
      </Text>
      </View>
       </View>
}
/>
</View>
  );
}

const artistas = [
  {
    uid:1,
    nome:'Pecaos',
    like: 2000,
    seguidores: 10000,
    buttom: 'Pecaos'
  },

   {
    uid:2,
    nome:'Sant',
    like: 4500,
    seguidores: 15000,
    buttom: 'Sant'
  },

  {
    uid:3,
    nome:'Cassol',
    like: 850,
    seguidores: 4345,
    buttom: 'Cassol'
  },

   {
    uid:4,
    nome:'Leal',
    like: 2500,
    seguidores: 3450,
    buttom: 'Leal'
  },
];

const estilo = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#a4d2f7',
  },

  artista: {
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

  txtArtista: {
    fontSize: 20,
  },
});
