import React, {useEffect, useState} from 'react';
import {  Text, View, ImageBackground, StyleSheet, ScrollView, ActivityIndicator, Image} from 'react-native';

const topics = [
  {
    id: '1',
    title: 'Combate ao abandono animal',
    description:
      'Ao adotar, você contribui diretamente para a redução do número de animais abandonados. Cada adoção representa uma vida salva e diminui a pressão sobre os abrigos, que frequentemente operam com recursos limitados.',
  },
  {
    id: '2',
    title: 'Custo-benefício',
    description:
      'A adoção é geralmente gratuita, enquanto a compra de cães de raça pode envolver custos elevados. Além disso, cães adotados frequentemente já são vacinados e castrados, economizando despesas iniciais com saúde.',
  },
  {
    id: '3',
    title: 'Saúde e adaptação',
    description:
      'Cães adotados, especialmente os adultos, já possuem temperamento definido, facilitando a adaptação ao novo lar. Além disso, os vira-latas tendem a ter sistemas imunológicos mais robustos, resultado de sua adaptação às condições locais.',
  },
  {
    id: '4',
    title: 'Evita a exploração comercial',
    description:
      'A compra de cães de raça pode incentivar práticas de criação irresponsáveis, onde animais são explorados para reprodução contínua. Adotar ajuda a combater essa exploração e promove a posse responsável.',
  },
  {
    id: '5',
    title: 'Sustentabilidade e adaptação climática',
    description:
      'Optar por cães que já estão acostumados ao clima e às condições locais evita o sofrimento de animais que não são adequados ao ambiente, como é o caso de algumas raças importadas que não toleram bem o calor.',
  },
];

export default function Description(){

  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar imagem do cachorro:', err);
        setLoading(false);
      });
  }, []);

    return(
        <ImageBackground
        source={require('../../assets/bg.png')}
        style={styles.container}
        resizeMode='cover'
        >
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.sectionTitle}>Por que adotar?</Text>
            <Text style={styles.paragraph}>
              Adotar um cachorro em vez de comprá-lo é uma escolha que beneficia tanto os animais
               quanto a sociedade. No Brasil, estima-se que existam cerca de 30,2 milhões de cães
                e gatos vivendo em situação de abandono, representando aproximadamente 25% da
                 população total desses animais no país.
            </Text>
        
            {topics.map((item) => (
              <View style={styles.card} key={item.id}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            ))}

            <Text style={styles.paragraph}>
              A adoção de cães é um ato de compaixão que ajuda a diminuir o sofrimento animal e 
              a promover uma sociedade mais justa e responsável. Ao escolher adotar, você não 
              apenas ganha um amigo fiel, mas também contribui para a construção de um mundo 
              melhor para todos os seres vivos.
            </Text>
        
            <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Adote</Text>

            {loading ? (
              <ActivityIndicator size="large" color="#fff" style={{ marginVertical: 10 }} />
            ) : (
              dogImage && (
                <Image
                  source={{ uri: dogImage }}
                  style={styles.dogImage}
                  resizeMode="cover"
                />
              )
            )}
          </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    listContent: {
      padding: 16,
    },
    card: {
      backgroundColor: '#6A0DAD',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 2 },
      elevation: 4,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 8,
    },
    description: {
      fontSize: 15,
      color: '#fff',
    },
    text: {
      fontSize: 18,
      color: '#6A0DAD',
      marginBottom: 8,
    },
    scrollContent: {
      padding: 16,
      paddingBottom: 32,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 8,
      textAlign: 'center'
    },
    paragraph: {
      fontSize: 16,
      color: 'black',
      marginBottom: 26,
      lineHeight: 22
    },
    dogImage: {
      width: '100%',
      height: 250,
      borderRadius: 16,
      marginBottom: 30,
    },
  });
  