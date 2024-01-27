import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import DrawerOptions from '../componentes/DrawerOptions';

export default function Relatorio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Relatorio</Text>
      <DrawerOptions/>
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
});
