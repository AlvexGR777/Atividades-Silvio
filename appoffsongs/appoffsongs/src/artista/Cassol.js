import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Leal() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Cassol</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image 
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/nativo.jpg')}
              />
              <Text style={estilo.rotulo}>Nativo </Text>
            </View>

            <View>
              <Image resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/nativo.jpg')}
              />
              <Text style={estilo.rotulo}>Setor De Reciclagem</Text>
            </View>

            <View>
              <Image resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/cassol.jpg')}
              />
              <Text style={estilo.rotulo}>Foto do Cassol</Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}> 
         Cassol é um exímio rapper lírico onde a suas letras e composições vão além de tocar nos fones, tocam na alma!
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


















