import { View, StyleSheet } from "react-native";

import CustomText from "./CustomText";
import ItemDrawer from "./ItemDrawer";

import Cartoes from '../../assets/cartoes.svg'
import Categorias from '../../assets/categorias.svg'
import Dolar from '../../assets/dolar.svg'
import Metas from '../../assets/metas.svg'
import Limites from '../../assets/limite.svg'

export default function OptionsHome () {

  return (
    <View style={styles.drawerContent}>
      <CustomText style={{fontSize: 13}} texto={'Mais opções'}/>
      <View style={styles.itemConteiner}>
        <View style={{...styles.itemLine, marginBottom: 21, marginTop: 26}}>
          <ItemDrawer Icon={<Cartoes/>} text={'Meus Cartões'}/>
          <ItemDrawer Icon={<Dolar/>} text={'Minhas Contas'}/>
          <ItemDrawer Icon={<Categorias/>} text={'Minhas Categorias'}/>
        </View>
        <View style={styles.itemLine}>
        <ItemDrawer Icon={<Metas/>} text={'Minhas Metas'}/>
        <ItemDrawer Icon={<Limites/>} text={'Limite de Gastos'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: "#ffffff",
    paddingTop: 15,
    paddingBottom: 34,
    paddingHorizontal: 31,
  },
  itemConteiner: {
    alignItems: 'center',
  },
  itemLine: {
    flexDirection: 'row',
  }
});
