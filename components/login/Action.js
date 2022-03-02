import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Login from "../login/Login";
import Signup from "../login/Signup";
import { height } from "../../Constants";

const Action = (props) => {
  // State
  const [action, setAction] = useState("welcome");
  

 const loggedIn = () => {
   props.loggedIn()
 }
 

  // Welcome screen
  if (action === "welcome") {
    return (
      <View style={styles.container}>
        <PrimaryButton title="Log in" pressed={() => setAction("login")} />
        <SecondaryButton title="Sign up" pressed={() => setAction("signup")} />
      </View>
    );
  }

  // Login screen
  if (action === "login") {
    return (
      <View style={styles.container}>
        <Login loggedIn={() => loggedIn()} noAccount={() => setAction("signup")}/>
      </View>
    );
  }

  // Signup screen
  if (action === "signup"){
    return (
      <View style={styles.container}>
        <Signup haveAccount={() => {}}/>
      </View>
    );
  }
};

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: height/15
  }
});

export default Action;
