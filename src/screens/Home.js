import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import DrawerBottom from '../componentes/DrawerBottom';
import React, { useRef } from "react";
import OptionsHome from '../componentes/OptionsHome';

import Options from '../../assets/options.svg'
import Notificacion from '../../assets/notificacao.svg';
import Pagar from '../../assets/pagar.svg';
import Receitas from '../../assets/receita.svg';
import Despesas from '../../assets/desPagas.svg';
import Saldo from '../../assets/saldo.svg';
import ButtonGroup from '../componentes/ButtonGroup';
import CustomText from '../componentes/CustomText';

export default function Home() {
  const refRBSheet = useRef();

  const openDrawer = () => {
    if (refRBSheet.current) {
      refRBSheet.current.open();
    }
  };
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
      <View style={styles.header}>
        <Options fill="black" onPress={openDrawer}/>
        <View style={styles.headerCol2}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: 43, height: 43, backgroundColor: '#D9D9D9', borderRadius: 100/2, marginHorizontal: 18}}></View>
            <View>
              <Text style={{fontSize: 16, fontFamily: 'Sansation-Regular'}}>Oi,</Text>
              <Text style={{fontSize: 16, fontFamily: 'Sansation-Regular'}}>Bem vindo!</Text>
            </View>
          </View>
          <Notificacion/>
        </View>
      </View>
      <View >
        <View style={styles.containerMain}>
          <View style={styles.informationLine}>
            <View style={styles.information}>
              <Pagar/>
              <View style={{marginLeft: 9}}>
                <Text style={{...styles.textBase}}>A pagar</Text>
                <Text style={styles.textBase}>*********</Text>
              </View>
            </View>
            <View style={styles.information}>
              <Receitas/>
              <View style={{marginLeft: 9}}>
                <Text style={styles.textBase}>Receita</Text>
                <Text style={styles.textBase}>*********</Text>
              </View>
            </View>
          </View>
          <View style={{...styles.informationLine,marginTop: 13}}>
            <View style={styles.information}>
              <Despesas/>
              <View  style={{marginLeft: 9}}>
                <Text style={styles.textBase}>Despesas Pagas</Text>
                <Text style={styles.textBase}>*********</Text>
              </View>
            </View>
            <View style={styles.information}>
              <View style={{width: 29, height: 29, backgroundColor: '#D9D9D9', borderRadius: 100/2, justifyContent: 'center', alignItems: 'center'}}>
                <Saldo/>
              </View>
              <View  style={{marginLeft: 9}}>
                <Text style={styles.textBase}>Saldo Atual</Text>
                <Text style={styles.textBase}>*********</Text>
              </View>
            </View>        
          </View>
        </View>
        <View style={styles.containerMain}>
          <View style={{...styles.information, flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', paddingRight: 29}}>
            <View>
              <Text style={styles.textBase}>Assine o Premium</Text>
              <Text style={styles.textBase}><CustomText style={{fontFamily: 'Sansation-Bold'}} texto={'R$ 9,90'}/>/mensal</Text>
            </View>
            <Text style={{...styles.textBase, color: '#00C950', textDecorationLine: 'underline', fontWeight: 700,  fontFamily: 'Sansation-Regular'}}>
              Escolha o Plano
            </Text>
          </View>
        </View>
        <View style={{paddingTop: 16}}>
          <View style={styles.servicos}>
            <Text style={styles.textBase}>Meus Cartões</Text>
            <View style={{paddingHorizontal: 25, justifyContent: 'center', paddingTop: 9}}>
              <Text style={{...styles.textBase, color: '#A49A9A', paddingBottom: 12}}>Você ainda não tem nenhum cartão cadastrado</Text>
              <ButtonGroup 
              title='Adicionar Cartão'
              buttonStyle={{backgroundColor: '#00C950', paddingHorizontal: 50, paddingVertical: 8}}
            />
            </View>
          </View>
          <View style={styles.servicos}>
            <Text style={styles.textBase}>Minhas Contas</Text>
            <View style={{paddingHorizontal: 22, justifyContent: 'center', paddingTop: 9}}>
              <Text style={{...styles.textBase, color: '#A49A9A', paddingBottom: 12}}>Você ainda não tem nenhuma conta cadastrada</Text>
              <ButtonGroup 
              title='Adicionar Contas'
              buttonStyle={{backgroundColor: '#00C950', paddingHorizontal: 68, paddingVertical: 8}}
            />
            </View>
          </View>
          <View style={{marginTop: 3}}>
            <Text style={styles.buttonPremium}>Premium</Text>
            <View style={{...styles.servicos, borderColor: "#00C950", borderWidth: 1}}>
              <Text style={styles.textBase}>Recomendações com Inteligência Artificial</Text>
              <View style={{paddingHorizontal: 31, justifyContent: 'center', paddingTop: 9}}>
                <Text style={{...styles.textBase, color: '#A49A9A', paddingBottom: 12}}>Assine o premium para obter essa função</Text>
                <ButtonGroup 
                title='Assinar'
                buttonStyle={{backgroundColor: '#00C950', paddingHorizontal: 75, paddingVertical: 8}}
              />
              </View>
            </View>
          </View>
          <DrawerBottom refRBSheet={refRBSheet} altura={327}><OptionsHome/></DrawerBottom>
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 31,
    paddingVertical: 50
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14
  },
  headerCol2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 
  informationLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%"
  },
  information: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 11,
    width: 157,
    borderColor: "#E8E8E8",
    borderWidth: 1,

  },
  textBase:{
    fontSize: 12,
    fontFamily: 'Sansation-Regular'
  },
  servicos: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 11,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    width: '100%', 
    flexDirection: 'column',
    marginBottom: 16,
  },
  buttonPremium: {
    position: 'absolute',
    top: -10, // ajuste conforme necessário
    right: 15,
    zIndex: 1,
    backgroundColor: '#00C950',
    paddingHorizontal: 8, 
    color: 'white',
    borderRadius: 5,
    fontFamily: 'Sansation-Bold',
    paddingBottom: 2
  },
  containerMain:{
    paddingBottom: 16,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    paddingVertical: 16
  }
});