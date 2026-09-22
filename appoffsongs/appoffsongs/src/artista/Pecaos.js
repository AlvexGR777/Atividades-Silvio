import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Pecaos() {
return (
  <ScrollView>
  <View style={estilo.container}>
  <Text style={estilo.titulo}> Pecaos </Text>
  <View>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  <View>
  <Image 
  resizeMode={'stretch'}
  style={estilo.img}
  source={require('../../assets/pmmsv.jpg')}
  />
  <Text style={estilo.rotulo}> Parece morte, mas é só a vida </Text>
  </View>

  <View>
  <Image resizeMode={'stretch'}
  style={estilo.img}
  source={require('../../assets/rlkdvl.jpg')}
  />
  <Text style={estilo.rotulo}>RLKDVL</Text>
  </View>

  <View>
  <Image resizeMode={'stretch'}
  style={estilo.img}
  source={require('../../assets/pecaos.jpg')}
  />
  <Text style={estilo.rotulo}>Pecaos foto</Text>
  </View>
  </ScrollView>
  
  </View>
  <View style={estilo.resumo}>
  <Text style={estilo.textoResumo}> Rapper vindo da Lindóia do Rio Grande do Sul, Mais um representante do rap de favela! </Text>
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


















