import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Leal() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Leal </Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image 
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/veni.jpg')}
              />
              <Text style={estilo.rotulo}> Veni, Vidi,Vici </Text>
            </View>

            <View>
              <Image resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/quebrandotabucapa.jpg')}
              />
              <Text style={estilo.rotulo}>Quebrando Tabu</Text>
            </View>

            <View>
              <Image resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/leal.jpg')}
              />
              <Text style={estilo.rotulo}>Foto do Leal</Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}> 
          Leal é um artista brasileiro, admirado pela contundência nas letras e   
          muito sentimento ao compor, conhecido pela sua trajetória há mais de 10 
          anos com      
          o grupo PrimeiraMente, que se estende em mais de 200 milhões de 
          streams, 3 discos de ouro e diversas turnês nacionais, participou 
          também de projetos nomeados como poetas no topo e agora segue em 
          acensão em sua carreira solo. 
          </Text>
        </View>
      </View>
    </ScrollView>
      );
    }

const estilo = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#a4d2f7',
  },

img:{
width: 330,
height: 400,
marginHorizontal: 25,
borderRadius: 10,
  },

titulo:{
fontSize: 30,
textAlign:'center',
color:'#ffffff',
fontWeight:700,
marginTop:50,
marginBottom: 30,
  },

rotulo:{
textAlign: 'center',
marginTop: 20,
fontSize: 20,
  },

resumo: {
 marginTop: 20,
 marginHorizontal: 15,
 backgroundColor: '#ffffff70',
 borderRadius: 7,
 padding: 8,
  },

textoResumo: {
  fontSize: 19,
  },
});


















