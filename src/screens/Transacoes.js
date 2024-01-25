import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { format, parseISO } from 'date-fns';

import Calendar from '../../assets/calendar.svg';
export default function Transacoes() {
  const today = new Date();
  const formattedDate = format(today, 'MMM yyyy');
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View>
          <Text>Relatório</Text>
          <Text>Detalhado</Text>
        </View>
        <View style={styles.containerData}>
          <Text>{formattedDate}</Text>
          <Calendar width={24} heigth={22}/>
        </View>
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%', // Ocupa toda a largura da tela
  },
  containerHeader:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 31,
    paddingTop: 50
  },
  containerData: {
    width: 95, 
    justifyContent: 'space-between',
   flexDirection: 'row' 
  }
});