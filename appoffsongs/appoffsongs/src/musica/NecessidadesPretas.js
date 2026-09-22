import React from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';

 export default function NecessidadesPretas(){
const letra= `Vida longa ao norte! Sant!
Tenho de enfrentar meus medos, yeah
Encontrar o caminho do meio, yeah
Aprender pra errar menos
E ainda me manter o mermo
Escapar dos julgamentos
Preciso estar mais focado
Apertar outro baseado (e hu)
Lidar com os meus sentimentos
Sobre esses vazios, em boates cheias
E essa busca rasa por aceitação
Sobre essas carências
E quantas travestem em revolução
Admita ou não
Pensei em proteção
Era maquiagem, olha como agem
Ódio e ficção, polarização
Covarde ou vilão
E o que vocês são?
Eu era bem mais humilde
Dava atenção pra minha mãe
Hoje, o dinheiro deu forças
Por mais que eu ainda apanhe
Da vida, da polícia, na dúvida
Da culpa que a minha pele carrega
Sobre falar de hortas
Em terras que apenas a morte rega
Querem ter razão e imunidade
Ser a salvação, sem ver unidade
Falo sobre perdão, continuidade
E esperança pra quem só quer mermo vingança
Preciso que um rapper me mencione
Farei com que ovacionem-me
Gritem meu nome
E depois me cobrem de necessidades
Que nenhum deles já precisou
E se precisou
Soube a dor que a impotência lhe causou
Preciso que parem de me comparar como um igual desses cara
Pois juro eu não sou
Sério, eu não sou
Puxa o fundamento em qualquer favela
Ou depois do show
Contrata o show
Ouça meu disco, visão de onde vim
Antes de ir pro’nde vou
Mas pra onde vou?
Preciso achar equilíbrio
Autoestima e confiança
Trabalhar minha consciência
E não deixar pesar a balança
Eu sou um preto rico
Casa, joias, roupas
Tênis, paranóias, groupies
Projeções furadas
Escolhas frustradas
Martírios, neuroses
Milhares de miras
Não! (Não, não)
Preciso encontrar algo que me faça respirar
O que viva por dentro
Uma resposta, uma luz que possa me guiar
Pro caminho certo (certo)
Pro caminho certo, que me leve a acreditar
E creditar, pra me curar
No caminho certo
Só preciso meditar
E me editar
Oi, filho, como você tá?
Tava lá na sua vó, fui lá ver ela, que ela piorou o estado dela de saúde
Vai fazer uma drenagem na segunda-feira
Mas soube também que o Germano voltou pra cadeia, infelizmente, né
Você continua [?]. Como é que você tá? Insiste em não falar comigo, né?
Mas eu ainda to aqui, continuando te amando e
Tentando ai te perseguir de alguma forma. Fica com Deus

Composição: Sant.
`;

  return(
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Necesidades Pretas</Text>

        <Text style={styles.subtitulo}>
          Sant
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









