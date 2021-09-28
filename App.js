import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from './src/components/Title/index.js'
import Form from './src/components/Form/index.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    paddingTop: 80, 
    
  }
})
