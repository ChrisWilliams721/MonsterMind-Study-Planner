import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  }
});
const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/background.png')} style={styles.image} resizeMode='cover'>
      

      </ImageBackground>
    </View>
  )
}

export default Home;

