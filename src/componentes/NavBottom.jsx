import { StyleSheet, View, Text} from 'react-native';
import React, { useRef } from "react";


import Home from '../screens/Home';
import Relatorio from '../screens/Relatorio';
import Transacoes from '../screens/Transacoes';
import Adicionar from '../screens/Adicionar';
import Perfil from '../screens/Perfil';

import AdcionarDrawer from './AdcionarDrawer';
import DrawerBottom from './DrawerBottom';

import HomeIcon from '../../assets/HomeIcon.svg';
import RelatiorioIcon from '../../assets/relatorio.svg';
import TransacoesIcon from '../../assets/Vector.svg';
import AdicionarIcon from '../../assets/calc.svg';
import PerfilIcon from '../../assets/user.svg';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function NavBottom() {
  const refRBSheet = useRef();

  const openDrawer = () => {
    if (refRBSheet.current) {
      refRBSheet.current.open();
    }
  };
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator style={styles.routerNavContainer}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { display: 'flex', height: 91}, 
          tabBarActiveTintColor: "#00C950",
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View style={styles.routerNav}>
                <HomeIcon width={size} height={size} fill={color}
                  style={{
                    color: focused ? '#00C950' : 'gray',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#00C950' : 'gray',
                    ...styles.navRouter
                  }}
                >Home</Text>            
              </View>
            ),
          }}
        />
        <Tab.Screen name="Transações" component={Transacoes} 
          options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View  style={styles.routerNav}>
              <TransacoesIcon width={size} height={size} fill={color} />
              <Text
                  style={{
                    color: focused ? '#00C950' : 'gray',
                    ...styles.navRouter
                  }}
                >Transações</Text>  
            </View>
          ),
          }}
        />
        <Tab.Screen name="Adicionar" component={Adicionar} listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            openDrawer();
          }
        })}

          options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View  style={styles.routerNav}>
              <AdicionarIcon width={size} height={size} fill={color}/>
              <Text
                  style={{
                    color: focused ? '#00C950' : 'gray',
                    ...styles.navRouter
                  }}
                >Adicionar</Text>  
            </View>
          ),
          }}
          
        />
        <Tab.Screen name="Relatório" component={Relatorio} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View  style={styles.routerNav}>
                <RelatiorioIcon width={size} height={size} fill={color}/>
                <Text
                  style={{
                    color: focused ? '#00C950' : 'gray',
                    ...styles.navRouter
                  }}
                >Relatório</Text>  
              </View>
            ),
            }}
          />
        <Tab.Screen name="Perfil" component={Perfil} 
          options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View  style={styles.routerNav}>
              <PerfilIcon width={size} height={size} fill={color}/>
              <Text
                  style={{
                    color: focused ? '#00C950' : 'gray',
                    ...styles.navRouter
                  }}
                >Perfil</Text>  
            </View>
          ),
          }}
        />
      </Tab.Navigator>
      <DrawerBottom refRBSheet={refRBSheet} altura={219} border={10}>
        <AdcionarDrawer/>
      </DrawerBottom>
    </View>
    
  );
}

const styles = StyleSheet.create({
  routerNavContainer: {
    flex: 1,
    height: 400,
    paddingVertical: 10,
    backgroundColor: "black",
  },
  routerNav:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  NavIcon: {
    marginBottom: 0,
    color: "#00C950",
    backgroundColor: "#00C950"
  },
  navRouter: {
    fontSize: 10,
    fontFamily: 'Sansation-Regular',
    fontWeight: '400',
    paddingTop: 12
  },
});
