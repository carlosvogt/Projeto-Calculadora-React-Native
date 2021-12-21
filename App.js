import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
const App = function App() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [lastNumber, setLastNumber] = useState('');

  function calculator() {
    const splitNumbers = currentNumber.split(' ');
    const operator = splitNumbers[1];
    console.log('operator', operator);
    console.log('currentNumber', currentNumber);
    if (operator === '*') {
      setCurrentNumber(
        (parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString(),
      );
    }
    if (operator === '/') {
      setCurrentNumber(
        (parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString(),
      );
    }
    if (operator === '+') {
      setCurrentNumber(
        (parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString(),
      );
    }
    if (operator === '-') {
      setCurrentNumber(
        (parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString(),
      );
    }
  }

  function handleClick(item) {
    console.log('item', item);
    if (item === '+' || item === '*' || item === '/' || item === '-') {
      setCurrentNumber(`${currentNumber} ${item} `);
    } else if (item === 'AC') {
      setLastNumber('');
      setCurrentNumber(0);
    } else if (item === '.') {
      setCurrentNumber(currentNumber + item);
    } else if (item === '=') {
      setLastNumber(`${currentNumber} =`);
      calculator();
    } else {
      setCurrentNumber(currentNumber + item);
    }
  }

  return (
    <View style={styles.container}>
      <Display value={currentNumber} />
      <View style={styles.buttons}>
        <Button label="AC" size="triple" onPress={() => handleClick('AC')} />
        <Button label="/" operation onPress={() => handleClick('/')} />
        <Button label="7" onPress={() => handleClick(7)} />
        <Button label="8" onPress={() => handleClick(8)} />
        <Button label="9" onPress={() => handleClick(9)} />
        <Button label="*" operation onPress={() => handleClick('*')} />
        <Button label="4" onPress={() => handleClick(4)} />
        <Button label="5" onPress={() => handleClick(5)} />
        <Button label="6" onPress={() => handleClick(6)} />
        <Button label="-" operation onPress={() => handleClick('-')} />
        <Button label="1" onPress={() => handleClick(1)} />
        <Button label="2" onPress={() => handleClick(2)} />
        <Button label="3" onPress={() => handleClick(3)} />
        <Button label="+" operation onPress={() => handleClick('+')} />
        <Button label="0" size="double" onPress={() => handleClick(0)} />
        <Button label="." onPress={() => handleClick('.')} />
        <Button label="=" operation onPress={() => handleClick('=')} />
      </View>
    </View>
  );
};
export default App;
