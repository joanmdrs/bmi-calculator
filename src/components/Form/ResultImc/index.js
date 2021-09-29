import React from 'react'
import { View, Text, Image, TouchableOpacity, Share } from 'react-native'
import styles from './style.js'

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: 'Meu imc hoje é: ' + props.resultImc
    })
  }
  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{props.messageResultImc} </Text>
      <Text style={styles.numberImc}>{props.resultImc} </Text>

      <View style={styles.boxShareButton}>
        {props.resultImc != null ? (
          <TouchableOpacity style={styles.shared} onPress={onShare}>
            <Image style={styles.sharedIcon} source={require('./send.png')} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  )
}
