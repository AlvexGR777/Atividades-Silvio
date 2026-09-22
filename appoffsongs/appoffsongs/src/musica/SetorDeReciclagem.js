import React from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';

 export default function SetorDeReciclagem(){
const letra= `Nativo • 2024
Setor de Reciclagem
Letra de Setor de Reciclagem de Cassol
Ah mano em resumo ta ligado
No resumo memo as ideia é essa aqui
Nunca te pedi nada mano, então se puder
Desculpa a bagunça dos meus olhos
Se quer me trombar gira uns km
Eu to perdido
Abençoado seja
A liberdade de bandeja
Nós somos diferentes
Mas igual você sou filho
Como que coloco o que eu sinto na vitrine?
O exemplo arrasta as palavra apenas diz
Lembro eu comemorando por ter passado dos vinte
Igual hoje comemoro
Quando cai 10zao no pix
Claro que eu não quero sonhar baixo
Mas a vida é um teatro e a morte é a uma boa atriz
A conversa com o julio que mudou
Aquele dia a noite
Nós já sacrificou pra aprender resistir
A tentação
A minha imaginação
Ta sempre criando frases
Que te leva pra lugares mais pra frente
A mente é abstrata
Fraca memo é a faca
Que corta a intimidade
Em duas partes diferentes
Um amante que não transa
Um sonho que não sangra
A pessoa que não cansa
Algum medo que não mente
E tipo ta unânime
Parado no tatame
Duas perna que não dança
É um sábio que não aprende
Sentir me reafirma
Escrever me faz humano
Quer saber eu sou errante
Com credibilidade
Vou montar minha firma
Com a rima que nois farma
Isso aqui não é uma música
É o setor de reciclagem
Jogar sempre na várzea
Pra não usar você de base
Personalidade?
Qualquer um fuma um base
Quem deve e se paga
Vai morrer se perguntando
O que que
Faz os gurizes
Ser tão gangster
Uau
Parecia um sonho
Ou melhor daria um filme
Que cê assiste e não da sono
Olha pra minha cara e veja
Meu coração
Em árabe tá escrito
Arte no meu rosto
Vontade do que sou
Saudade do que vivi
Ja morei na concordia
Ubb santa regi
Na inpine nostalgia
Poucos pão pra várias pinha
Dividia até os pano
Até os plano nos dividir
Sou daqueles que prefere
A bagunça
Beber e jogar sinuca
Só pensar merda sozin
To sempre de passagem
Por vários lugares
Mas quando precisar
Só ligar que eu to aqui

Composição: Cassol.
`;

  return(
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Setor de reciclagem</Text>

        <Text style={styles.subtitulo}>
          leal
        </Text>

        <View style={styles.resumo}>
          <Text style={styles.textoResumo}>
            {letra}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4d2f7',
    paddingBottom: 30,
 },

  titulo:{
    fontSize:30,
    textAlign:'center',
    color: '#ffffff',
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 10,
 },

  subtitulo: {
    fontSize:20,
    textAlign:'center',
    color: '#1f3fb7',
    marginBottom: 20,
 },

 resumo: {
   marginHorizontal: 15,
   backgroundColor: '#ffffff70',
   borderRadius: 7,
   padding: 12,
 },

 textoResumo: {
   fontSize: 19,
   lineHeight: 32,
   color: '#222',
 },
}); 









