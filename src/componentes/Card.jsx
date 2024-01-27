import { StyleSheet, View} from 'react-native';

export default function Card (children) {
  
  <View style={styles.container}>{children}</View>

};

const styles = StyleSheet.create({
  container:{
    paddingBottom: 16,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    paddingVertical: 16
  }
});