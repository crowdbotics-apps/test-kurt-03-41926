import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const TigerMountainRetreat = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.QCHBQSWv}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  QCHBQSWv: {
    height: 45,
    width: 100,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 565
  }
});
export default TigerMountainRetreat;