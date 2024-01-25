import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function ButtonGroup ({ onPress, title, buttonStyle, textStyle }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
        fontFamily: 'Sansation-Regular'
  },
});
