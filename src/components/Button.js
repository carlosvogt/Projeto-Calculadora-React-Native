import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

function Button({ onPress, label, size, operation }) {
  const styleButton = [styles.button];
  if (size === 'double') styleButton.push(styles.buttonDouble);
  if (size === 'triple') styleButton.push(styles.buttonTriple);
  if (operation === true) styleButton.push(styles.operationButton);

  return (
    <TouchableHighlight onPress={onPress}>
      <Text style={styleButton}> {label}</Text>
    </TouchableHighlight>
  );
}
export default Button;
