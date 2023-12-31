  import { StyleSheet, Text, View } from 'react-native';
  import ContainerButtons from './components/Keyboard';
import { useState } from 'react';

  export default function App(): JSX.Element {

    const [firstNumber, setFirstNumber] = useState<string>("")
    const [secondNumber, setSecondNumber] = useState<string>("")
    const [operation, setOperation] = useState<string>("")
    const [operator, setOperator] = useState<string>("")
    const [result, setResult] = useState< number | null>(null)

    const handleNumberSelect = (number:string) => {
      setOperation((operationPrev) => operationPrev + number)
      setFirstNumber(firstNumber + number)
    }

    const handleOperatorSelect = (operator:string) => {
      setOperation((operationPrev) => operationPrev + operator)
      setOperator(operator)
      setSecondNumber(firstNumber)
      setFirstNumber("")
    }

    const clear = () => {
      setFirstNumber("")
      setSecondNumber("")
      setOperation("")
      setOperator("")
      setResult(null)
    }

    const getResult = () => {
     if (operation[0] === "-") {
       setResult( - parseInt(secondNumber) + parseInt(firstNumber))
     } else {
      if (secondNumber && !result) {
        switch (operator) {
          case "+":
            setSecondNumber("")
            setFirstNumber("")
            setResult( parseInt(secondNumber) + parseInt(firstNumber) )
            break;
          case "-":
            setSecondNumber("")
            setFirstNumber("")
            setResult( parseInt(secondNumber) - parseInt(firstNumber) )
            break;
          case "*":
            setSecondNumber("")
            setFirstNumber("")
            setResult( parseInt(secondNumber) * parseInt(firstNumber) )
          break;
          case "÷":
            setSecondNumber("")
            setFirstNumber("")
            setResult( parseInt(secondNumber) / parseInt(firstNumber) )
            break;
          default:
            clear()
            setResult(0)
            break;
        }
      }
     }
    }

    return (
      <View style={styles.container}>
        <View style={styles.containerResult}>
          <Text style={styles.result}>{operation}</Text>
          <Text style={styles.result}>{result}</Text>
        </View>
        <ContainerButtons handleNumberSelect={handleNumberSelect} handleOperatorSelect={handleOperatorSelect} clear={clear} getResult={getResult}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFCFC',
    },
    containerResult: {
      height: '30%',
      width: '100%',
      backgroundColor: '#13293D',
      marginBottom: 10,
      borderRadius: 10,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    result: {
      color: '#fff',
      marginEnd: 25,
      marginBottom: 25,
      fontSize: 50
    }
  });
