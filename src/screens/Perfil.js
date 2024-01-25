import { StyleSheet, Text, View, Button} from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Categoria from './Categoria';
import Calendar from '../../assets/calendar.svg';
import ButtonGroup from '../componentes/ButtonGroup';

const Stack = createStackNavigator();

export default function Perfil() {

  const today = new Date();
  const formattedDate = format(today, 'MMM yyyy');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View>
          <Text style={styles.fontBase}>Relatório</Text>
          <Text style={styles.fontBase}>Detalhado</Text>
        </View>
        <View style={styles.containerData}>
          <Text style={styles.fontBase}>{formattedDate}</Text>
          <Calendar width={24} heigth={22} fill=""/>
        </View>
      </View>
      <View style={styles.perfilContainer}>
        <View style={styles.perfil}></View>
        <View style={styles.perfilDados}>
          <Text style={styles.fontBase}>João</Text>
          <ButtonGroup 
            title='premium'
            buttonStyle={{backgroundColor: '#00C950', width: 80, paddingHorizontal: 15, paddingBottom: 3, paddingTop: 0}}
            textStyle={{fontSize: 12, fontFamily: 'Sansation-Regular' }}
          />
        </View>
      </View>
      <View style={{width: '100%'}}>
          <View style={styles.opcoes}>
            <Text style={styles.opcoesText}>Editar Perfil</Text>
            <Text style={styles.opcoesText}>Meus Cartões</Text>
            <Text style={styles.opcoesText}>Minhas Contas</Text>
            <Text style={styles.opcoesText} onPress={() => navigation.navigate('Categoria')}>Minhas Categorias</Text>
            <Text style={styles.opcoesText}>Minhas Metas</Text>
            <Text style={styles.opcoesText}>Limite de Gastos</Text>
            <Text style={styles.opcoesText}>Termo de Uso</Text>
            <Text style={styles.opcoesText}>Sair dessa Conta</Text>
            <Text style={{color: 'red'}}>Excluir minha Conta</Text>
          </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 31,
    width: '100%',
    flex: 1,
    backgroundColor: '#F9F9F9'
  }, 
  containerHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50
  },
  containerData: {
    width: 95, 
    justifyContent: 'space-between',
   flexDirection: 'row', 
   alignItems: 'center'
  },
  perfilContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 21,
    marginBottom: 58
  },
  perfil: {
    backgroundColor: '#D9D9D9',
    height: 90,
    width: 90,
    borderRadius: 5,
    marginBottom: 8
  },
  perfilDados:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  opcoes:{
    width: 128
  },
  opcoesText:{
    marginBottom: 25,
    fontFamily: 'Sansation-Regular'
  },
  fontBase:{
    fontFamily: 'Sansation-Regular'
  }
});