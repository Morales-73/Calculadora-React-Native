import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from './Button';

interface Keyboard {
  handleNumberSelect: (number:string) => void,
  handleOperatorSelect: (operator:string) => void,
  getResult: () => void,
  clear: () => void

}

export default function Keyboard( { handleNumberSelect, handleOperatorSelect, clear, getResult }: Keyboard ): JSX.Element {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.boxView}>
          <Button onPress={clear} text={"CA"}/>
          <Button onPress={() => handleOperatorSelect("C")} text={"C"}/>
          <Button onPress={() => handleOperatorSelect("%")} text={"%"}/>
          <Button onPress={() => handleOperatorSelect("÷")} text={"÷"}/>
        </View>

        <View style={styles.boxView}>
        <Button onPress={() => handleNumberSelect("7")} text={"7"}/>
        <Button onPress={() => handleNumberSelect("8")} text={"8"}/>
        <Button onPress={() => handleNumberSelect("9")} text={"9"}/>
        <Button onPress={() => handleOperatorSelect("*")} text={"X"}/>
        </View>

        <View style={styles.boxView}>
        <Button onPress={() => handleNumberSelect("4")} text={"4"}/>
        <Button onPress={() => handleNumberSelect("5")} text={"5"}/>
        <Button onPress={() => handleNumberSelect("6")} text={"6"}/>
        <Button onPress={() => handleOperatorSelect("-")} text={"-"}/>
        </View>

        <View style={styles.boxView}>
        <Button onPress={() => handleNumberSelect("1")} text={"1"}/>
        <Button onPress={() => handleNumberSelect("2")} text={"2"}/>
        <Button onPress={() => handleNumberSelect("3")} text={"3"}/>
        <Button onPress={() => handleOperatorSelect("+")} text={"+"}/>
        </View>

        <View style={styles.boxView}>
        <Button onPress={() => handleNumberSelect("0")} text={"0"}/>
        <Button onPress={() => handleOperatorSelect(",")} text={","}/>
        <TouchableOpacity style={styles.equalButton} onPress={() => getResult()}><Text>=</Text></TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },
  boxView: {
    flexDirection: "row",
    marginBottom: 15,
  },
  equalButton: {
    width: '45%',
    backgroundColor: '#C7DBE6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    height: 90,
    borderRadius: 50,
    marginHorizontal: 5
  }
});