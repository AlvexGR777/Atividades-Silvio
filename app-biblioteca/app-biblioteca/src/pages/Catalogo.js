import * as React from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Catalogo() {
  const navigation = useNavigation();
 
 
  return(
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Os melhores Livros Você encontra aqui!</Text>

       <FlatList
        data={livros}
        keyExtractor={(item) => item.uid.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={estilo.livros} 
            onPress={() => navigation.navigate(item.buttom)}
            activeOpacity={0.7}
          >
            <Text style={estilo.txtLivro}>{item.nome}</Text>
            
            <View style={estilo.infoLivro}>
              <Text style={estilo.curtidas}>
                <MaterialCommunityIcons name="thumb-up" size={20} color="#A0522D" />
                {' '}{item.curtidas} Curtidas
              </Text>
              
              <Text style={estilo.compras}>
                <MaterialCommunityIcons name="cart" size={20} color="#556B2F" />
                {' '}{item.compras} Compras
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
   

const livros= [
  {
    uid:1,
    nome:'Prisioneiro de Azkaban',
    curtidas: 2000,
    compras: 10000,
    buttom: 'PrisioneiroAzkaban'
  },

   {
    uid:2,
    nome:'Pequeno Principe',
    curtidas: 4500,
    compras: 15000,
    buttom: 'PequenoPrincipe'
  },

  {
    uid:3,
    nome:'O Mundo De Sofia',
    curtidas: 850,
    compras: 4345,
    buttom: 'OMundoDeSofia'
  },

   {
    uid:4,
    nome:'Hobbit',
    curtidas: 2500,
    compras: 3450,
    buttom: 'Hobbit'
  },
];

const estilo = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5ECD9',
  },

  livros: {
    backgroundColor: '#FFF8E7',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D7C4A3',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
  },

  infoLivro: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     marginTop: 8,
     
   },

  titulo: {
   fontSize: 30,
    textAlign: 'center',
    color: '#4E342E',
    fontWeigth: '700',
    marginVertical: 30,
  },
  curtidas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  txtLivro: {
    fontSize: 20,
    color: '#4E342E', 
   fontWeight: 'bold',
  },
});