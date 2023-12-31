import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Button {
  onPress: () => void,
  text: string
}

export default function Button({ onPress, text }:Button): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C7DBE6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    width: 90,
    height: 90,
    borderRadius: 50,
    marginHorizontal: 5,
  }
});