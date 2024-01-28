import React, { useRef } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

export default function DrawerBottom({ refRBSheet, children, altura, border  }) {
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
            backgroundColor: "#D9D9D9",
            marginTop: 17,
            width: 44,
            height: 6
          },
          container: {
            height: altura,
            borderRadius: border
          },
        }}
      >
        {children}
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
