import React, { useRef } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import CustomText from "./CustomText";
import Cartoes from '../../assets/cartoes.svg'
import Categorias from '../../assets/categorias.svg'
import Dolar from '../../assets/dolar.svg'
import Metas from '../../assets/metas.svg'
import Limites from '../../assets/limite.svg'


export default function DrawerOptions({ refRBSheet }) {
  return (
    <View>
      <RBSheet
        style={styles.drawerContent}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "#00000033",
          },
          draggableIcon: {
            backgroundColor: "#D9D9D9"
          },
          container: {
            height: 327
          },
        }}
      >
        <View style={styles.drawerContent}>
          <CustomText style={{fontSize: 13}} texto={'Mais opções'}/>
          <View style={styles.itemConteiner}>
            <View style={{...styles.itemLine, marginBottom: 21, marginTop: 26}}>
              <View style={styles.item}>
                <Cartoes/>
                <CustomText texto={'Meus Cartões'} style={{textAlign: 'center', marginTop: 10}}/>
              </View>
              <View style={styles.item}>
                <Dolar/>
                <CustomText texto={'Meus Cartões'} style={{textAlign: 'center', marginTop: 10}}/>
              </View>
              <View style={styles.item}>
                <Categorias/>
                <CustomText texto={'Meus Cartões'} style={{textAlign: 'center', marginTop: 10}}/>
              </View>
            </View>
            <View style={styles.itemLine}>
              <View style={styles.item}>
                <Metas/>
                <CustomText texto={'Meus Cartões'} style={{textAlign: 'center', marginTop: 10}}/>
              </View>
              <View style={styles.item}>
                <Limites/>
                <CustomText texto={'Meus Cartões'} style={{textAlign: 'center', marginTop: 10}}/>
              </View>
            </View>
          </View>
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: "#ffffff",
    paddingTop: 15,
    paddingBottom: 34,
    paddingHorizontal: 31,
    height: 327, // Ajuste conforme necessário
  },
  sectionText: {
    fontSize: 20,
    alignSelf: "center",
    color: "#000000",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  itemConteiner: {
    alignItems: 'center',
  },
  item: {
    height: 94,
    width: 94,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    paddingHorizontal: 13,
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
});
