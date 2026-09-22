import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Sant() {
return (
  <ScrollView>
  <View style={estilo.container}>
  <Text style={estilo.titulo}> Sant </Text>
  <View>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  <View>
  <Image 
  resizeMode={'stretch'}
  style={estilo.img}
  source={require('../../assets/sobreviventecapa.png')}
  />
  <Text style={estilo.rotulo}> O que separa os homens dos meninos </Text>
  </View>

  <View>
  <Image resizeMode={'stretch'}
  style={estilo.img}
  source={require('../../assets/necessidades.jpg')}
  />
  <Text style={estilo.rotulo}>Necessidades Pretas</Text>
  </View>

  <View>
  <Image resizeMode={'stretch'}
  style={estilo.img}
  source={require('../../assets/sant.jpg')}
  />
  <Text style={estilo.rotulo}>Sant foto</Text>
  </View>
  </ScrollView>
  
  </View>
  <View style={estilo.resumo}>
  <Text style={estilo.textoResumo}> Rapper vindo da Zona Norte do Rio de Janeiro, Mais um representante dos subúrbios e favelas. </Text>
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


















