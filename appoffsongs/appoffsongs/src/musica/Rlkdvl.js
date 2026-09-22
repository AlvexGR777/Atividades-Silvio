import React from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';

 export default function QuebrandoTabu(){
const letra= `Sangrei na piscina com tubarões propositalmente
Era mais fácil de atrair todos com uma só mente
Eu já me matei muitas vezes, ressurjo igual fênix
Só no meu bairro eu vi morrer uns 4 ou 5 Kendricks

Endricks, Erykahs e Jimi Hendrixs
Assim como eu vi nascer uns 4 ou 5 Enemies
Sem frenesi, eu sou seu nêmesis
Tipo assim, não há nada mais inflado que o ego do Mr Freeze

Primeira crise, Gênesis, garota, Take it easy
Você não achou que tá comigo seria tão easy, né?
2020, Zona show, Missisipi, do Madeira, sem slick
Nós memo que gravava nossos clipe

É, sem equipe, sem grana
Sem comida e sem cama
Um recordista no Guinness
Outro enquadro com Billy

30, Orcesi, sem roteiro, Scorsese
Quantas vezes perguntei onde é que tava meu dad?
É a vingança dos nerd
O relíquia da VL, Vg, Bq, Xm, Ubb, Prl

Era Derb, virou Chester, meu veneno diário
Sem aplicar Jhonsada, com Airsoft no forro do armário
O mês era maio, meu início no tráfico
10 conto a droga do rap, 041 é o cep

Não chorei na morte do Kevin, chorei na morte do Machado
Do Menor, do Zaran e do Astrociv, serve?
2015 o tubão no Jamaica, suco e Balalaika
Segunda crise, vácuo, minha kitnet era o pico do talco

Na dúvida se Malcolm ou Malvo (malvo)
Independe até com a plebe, eu era visto igual alvo
Bandido em potencial, rival da lesma é só sal
Eu me puni pra vê o sol, se eu não fizesse algum som

Mano, eu não nasci mal, eu só nasci deslocado
Agora realocado, igual uma ParaFAL
Inimigo declarado do estado
Contratantes, soldout no show, me acionem

Caso contrário não quero nem que mencionem
Sou melhor no meu bairro, eu e Mister foi visionário
Já faz 6 anos e cês não pegou a do círculo ao contrário
Meu vocabulário é rima, toda a hora é hora do rap

Toda a hora é hora de roubar a sua atenção na track
PJL, pô, bake, caliza, segue na Barber
Bege não é cor de pele, quebrei seu lápis da Faber
Quantas vezes na trave? O gol é uma novidade

A menor foi cancelada, mas descobriu raridades (agora foi)
TP2, Peppa Pig, me rouba galo, dispenso geral
Me bateu mais que Xamuel e Jhony
Meu irmão na adolescência era igual o Johnny Bravo

Nós sempre teve a mesma mãe
Só não tinha a mesma fome, era do sintético
Enrolei a nota de dois pa cheirar bala
Ensinei minha ex, até hoje ela não para

Levei a sério a do Criolo, sobre o dom e o karma
Eu não sou bom, eu tenho sorte
Nem a morte me encara, fala
Composição: Pecaos,Hosken Beatz.
`;

  return(
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Quebrando Tabu</Text>

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









