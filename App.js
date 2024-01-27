import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import NavBottom from './src/componentes/NavBottom';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Sansation-Regular': require('./assets/fonts/Sansation_Regular.ttf'),
    'Sansation-Bold': require('./assets/fonts/Sansation_Bold.ttf')

  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    // Container de navegação
    <NavigationContainer style={styles.routerNavContainer}>
      <NavBottom /> 
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
  }
});
