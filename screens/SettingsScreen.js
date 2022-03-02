import { StyleSheet, SafeAreaView, Text } from "react-native";
import React from "react";

const SettingsScreen = () => {
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A84FF",
  },
  title: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 30,
    marginTop: 20,
  },
});
