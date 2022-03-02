import { View, Text, StyleSheet, Dimensions, Linking } from "react-native";
import React, { useState } from "react";
import InputField from "../inputs/InputField";
import PrimaryButton from "../buttons/PrimaryButton";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


// Get screen dimensions
const { width, height } = Dimensions.get("screen");

const Login = (props) => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Navigation
  const navigation = useNavigation();

  // User logged in
  const userLoggedIn = (uid) => {
    navigation.navigate('Main', {
      uid: uid,
    });
    console.log("logged in")
  }

  // Send entered info
  const sendInfo = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user

      // User logged in
      if(user){
        userLoggedIn(user.uid)
      }
    })
  };

  return (
    <View style={styles.container}>
      <InputField
        placeholderText="Email"
        icon="envelope"
        text={(text) => setEmail(text)}
      />
      <InputField
        placeholderText="Password"
        icon="lock"
        text={(text) => setPassword(text)}
        isPassword= "true"
      />
      <PrimaryButton title="Log in" pressed={sendInfo} />
      <Text style={styles.link}>Forgot password?</Text>
      <View style={styles.horizontalLine} />
      <Text style={styles.link} onPress={props.noAccount}>
        Don't have an account?
      </Text>
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    position: "absolute",
    width: width,
    height: height,
    top: -300,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 40,
  },
  link: {
    color: "#0A84FF",
    textAlign: "center",
    marginTop: 20,
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 300,
    marginHorizontal: 50,
    marginTop: 20,
  },
  googleButton: {
    width: 192,
    height: 48,
    marginHorizontal: 100,
    marginTop: 30,
  },
});

export default Login;
