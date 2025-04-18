import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get("window")
const IMAGE_WIDTH = width

export default function DogImagesScreen() {
    const [dogImages, setDogImages] = useState([])
    const [loading, setLoading] = useState(true)
  
    const fetchDogImages = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/10')
        const data = await response.json()
        setDogImages(data.message)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar imagens:', error)
        setLoading(false)
      }
    }
  
    useEffect(() => {
      fetchDogImages()
    }, [])
  
    const renderItem = ({ item }) => (
      <ImageBackground
      source={require('../../assets/bg.png')}
       style={styles.imageContainer}>
        <Image source={{ uri: item }} style={styles.image} />
      </ImageBackground>
    )

    const renderHeader = () => (
        <View style={styles.headerContainer}>
            <Image 
        source={require('../../assets/dog-icon.png')} 
        style={styles.headerIcon} 
      />
          <Text style={styles.headerText}>Pets para adoção</Text>
        </View>
      );
  
    return (
      <ImageBackground 
      source={require('../../assets/bg.png')}
      style={styles.container}>
        {loading ? (
          <Text>Carregando...</Text>
        ) : (
          <FlatList
            data={dogImages}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper} 
            ListHeaderComponent={renderHeader}
          />
        )}
      </ImageBackground>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    }, headerContainer: {
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#DDA0DD',
        borderRadius: 10,
        width: '100%'
      }, headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
      },imageContainer: {
        flex: 1,
        width: "100%",
        height: 10,
        margin: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },headerIcon: {
        width: 50,
        height: 30,
        borderRadius: 15, 
      },image: {
        width: IMAGE_WIDTH / 2.3,
        height: IMAGE_WIDTH / 2.3,
        margin: IMAGE_WIDTH * 0.3, 
        borderRadius: 5,
    },columnWrapper: {
        justifyContent: 'space-between', 
    },
  })