import { View, StyleSheet } from "react-native"

import ItemDrawer from "./ItemDrawer"

import Categorias from '../../assets/categorias.svg'
import Adcionar from '../../assets/adicionar.svg'
import Subtrair from '../../assets/diminuir.svg'

export default function AdcionarDrawer(){
  return(
    <View style={styles.itemConteiner}>
        <View style={{...styles.itemLine, marginBottom: 21, marginTop: 26}}>
          <ItemDrawer Icon={<Adcionar/>} text={'Adicionar Receita'}/>
          <ItemDrawer Icon={<Subtrair style={{paddingBottom: 0}}/>} text={'Adicionar Despesa'}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemConteiner: {
    alignItems: 'center',
  },
  item: {
    height: 94,
    width: 94,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 19,
    borderRadius: 5,
    flexDirection: 'column',
    marginRight: 15.51,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemLine: {
    flexDirection: 'row',
  }
})