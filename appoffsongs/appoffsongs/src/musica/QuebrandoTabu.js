import React from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';

 export default function QuebrandoTabu(){
const letra= `[Intro]
Hãn, hãn, hãn
Hãn, hãn, hãn
Hãn, hãn, hãn
[Ponte: Leal]
O que cêis quer de mim?
Sem intenções ruins
Olha onde nois chegou
E era pra ser assim
[Verso 1: Leal]
Me vejo distante de sonhos enganos de manos
Que nem sabem bem o que quer
Sei que vários vão falar que eu tive sorte
Mas eu sei que tive fé
Há dois anos atrás eu olhava pra frente
Sem nem saber bem entender o que era
Mano, o show nem era na norte
Eu, sem carona e sem moeda
Me arrumei, procurei, revirei as gaveta
Do quarto e não arrumei nada
Onze e vinte e três
Meu filho com um mês
Meu salário atrasava
Empresa super canalha
Mas eu disse que se foda
Essa porra toda, mano
Eu não vou ficar sem fazer nada
Trombei o Giko, 10 min de idéia
Nois fumo um beck, eu pulei a catraca
[Ponte: Leal]
E se eu fizesse como a vida quer?
Talvez hoje eu nem estaria aqui
Areia não deixa o castelo em pé
Toma cuidado pro seu não cair
Aqui não foi fácil também, mano
Aqui não teve boi também, mano
Eu tive que lutar também, mano
Se você tá bem, tá tudo bem vamo embora
[Verso 2: Leal]
Pra um lugar tão lindo
Que eu nem posso ou consigo imaginar
E essa justiça que é injusta que assusta
Não possa ou consiga nos alcançar
Ele nasceu com tudo mas não conquistou nada
Eu não nasci com quase nada
Mas eu conquistei tudo que eu tenho
A única coisa que eu herdei do meu pai
Foi coragem, jão, e por isso eu me empenho
A vida não é desenho, o que você fez
Não se apagará com a borracha, relaxa
Se faz o certo é o certo que te espera
Se não pensa e só faz merda
O que cê acha?
[Ponte: Leal]
São dias, meses, anos, que se passam
E às vezes os olhares se disfarçam
Meninas, copos, drogas, só dispersam
Então que os sorrisos falsos se desfaçam
[Verso 3: Leal]
Quem rejeita é rejeitado, quem respeita é respeitado
Toda ação vai ter um efeito e um resultado (E ae?)
E se eu tivesse escutado quem falo que era zuado
Não via as nota tava contando trocado, jão
E nisso tudo minha lição foi um conselho
Que o culpado de tudo que me acontece tá no espelho
E do seu lado minha prece parece ter mais efeito
Sim, nada é perfeito mas não vou me contentar
Em olhar pro espelho e saber que eu não vou mudar
Aceitar a merda de vida que o governo quer me dar
Quer te dá, quer roubar, se fuder
Não vou estudar pra ser não sei o quê
Ser um nada com 30 de idade
Com três faculdades pela metade
O ensino se resume a uma apostila
E a microcefalia aqui se torna verdade
Alternativas não existe opinião própria
Só mentes estampadas com selo de qualidade
Mas todo mundo pode ser um pouco mais
Basta se tocar e acordar pra realidade
Conheço um mano que daria tudo
Pra um dia ser chamado de doutor
Pra ter a facul, que aquele boy cu
Tranca, alegando que ele não gostou
O ser humano vai destruir tudo
Somente defendendo as coisas que ele criou
Acaba com um mundo pra ter outro mundo doente
Onde todo ser de infectou
[Ponte: Leal]
O que vier só vim
Isso não é só por mim
Nem tudo se acabou
Nem tudo tem um fim
Um plano de milhões
Milhões num plano só
Barracos e mansões
Visões que formam nós
Não adiana reclamar
Cartaz não vai mudar
Se eles não ouvir
O jeito é nois lutar
Arma é pra matar
E não pra proteger
Bomba efeito moral
Mas a moral cadê?
[Scratches]
[Ponte: Leal]
Tudo vem como se fosse embora
Como se fosse embora
Leva parte de mim pra longe de mim
Enquanto o céu chora
Nada bem mas você comemora, pois
Mais um dia é glória
Leva parte de mim pra longe de mim
E o mundo grita lá fora
Tudo vem como se fosse embora
Como se fosse embora
Leva parte de mim pra longe de mim
Enquanto o céu chora
Nada bem mas você comemora, pois
Mais um dia é glória
Leva parte de mim pra longe de mim
E o mundo grita lá fora

Composição: PrimeiraMente,Leal,TEAGA,NP Vocal,Gali.
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









