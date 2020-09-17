import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonjour Aljosha, Paul et Ana, voici la 1ère version de Hum!</Text>
      <Text style={styles.version}>Version 0.0.1 - 06/09/2020</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
  version: {
    color: 'gray',
    fontSize: 10,
    fontWeight: '100',
    textAlign: 'center',
  },
});
