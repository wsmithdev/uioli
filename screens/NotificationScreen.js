import { StyleSheet, SafeAreaView, Text } from "react-native";
import React from "react";

const NotificationScreen = () => {
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      
    </SafeAreaView>
  );
};

export default NotificationScreen;

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
