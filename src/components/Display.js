import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'flex-end',
  },
  displayValue: {
    fontSize: 40,
    color: '#fff',
  },
});

function Display({ value }) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue}>{value}</Text>
    </View>
  );
}
export default Display;
