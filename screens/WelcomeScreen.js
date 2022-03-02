import { StyleSheet, SafeAreaView, Text, Image, Button } from "react-native";
import React, { useState } from "react";
import Action from "../components/login/Action";
import { height, width } from "../Constants";


const WelcomeScreen = (props) => {

  const loggedIn = () => {
    props.loggedIn()
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Use It or Lose It</Text>
      <Image style={styles.img} source={require("../assets/credit-card.png")} />
      <Action loggedIn={() => loggedIn()}/>
    </SafeAreaView>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A84FF",
  },
  title: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 40,
    marginTop: height/20,
  },
  img: {
    resizeMode: "contain",
    height: height/1.8,
    width: width,
  }
});

export default WelcomeScreen;
