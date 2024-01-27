import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CustomText ({ style, texto} )  {

  return <Text style={[styles.text, style]}>{texto}</Text>;

};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Sansation-Regular'
  },
});
