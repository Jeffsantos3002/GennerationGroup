import { View, StyleSheet, Text } from "react-native"

import CustomText from "./CustomText"

export default function ItemDrawer({Icon, text}){
  return(
  <View style={styles.item}>
    <View style={{height: 24, justifyContent: 'center'}}><Text>{Icon}</Text></View>
    <CustomText texto={text} style={{textAlign: 'center', marginTop: 10}}/>
  </View>
  )
}

const styles = StyleSheet.create({
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
  }
})