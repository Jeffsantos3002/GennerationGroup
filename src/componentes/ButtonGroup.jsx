import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import CustomText from './CustomText';


export default function ButtonGroup ({ onPress, title, buttonStyle, textStyle }) {

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      {/* Passe o texto diretamente como filho de CustomText */}
      <CustomText style={[styles.text,textStyle]} texto={title}/>
    </TouchableOpacity>
  );
}


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
    fontFamily: 'Sansation-Bold'
  },
});
