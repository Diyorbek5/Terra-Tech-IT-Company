import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../../assets/logo.jpeg')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 130,
    marginBottom: 8,
  },
})
