import { StyleSheet, Image, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';


import Home from './src/screens/Home';
import Relatorio from './src/screens/Relatorio';
import Transacoes from './src/screens/Transacoes';
import Adicionar from './src/screens/Adicionar';
import Perfil from './src/screens/Perfil';

import HomeIcon from './assets/HomeIcon.svg';
import RelatiorioIcon from './assets/relatorio.svg';
import TransacoesIcon from './assets/Vector.svg';
import AdicionarIcon from './assets/calc.svg';
import PerfilIcon from './assets/user.svg';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
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
      <Tab.Screen name="Adicionar" component={Adicionar} 
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
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Sansation-Regular': require('./assets/fonts/Sansation_Regular.ttf'),
    'Sansation-Regular': require('./assets/fonts/Sansation_Bold.ttf')

  });

  if (!fontsLoaded) {
    return null; // ou renderizar um componente de carregamento, se preferir
  }
  return (
    <NavigationContainer style={styles.routerNavContainer}>
      <MyTabs />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  routerNavContainer: {
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
  }
});
