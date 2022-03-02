import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import InputField from "../inputs/InputField";
import PrimaryButton from "../buttons/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { width, height } from "../../Constants";

const Signup = (props) => {
  // State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Navigation
  const navigation = useNavigation();

  // User created
  const userCreated = (uid) => {
    navigation.navigate('Main', {
      uid: uid,
    });
    console.log("signed up")
  };

  // Send entered info
  const sendInfo = async () => {
    // Firebase authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        addUser(user.uid);
      })
      .catch((e) => console.log(e));
  };

  // Add use to Firestore
  const addUser = async (uid) => {
    const user = await setDoc(doc(db, "users", uid), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      cards: [
        {
          bankName: "Chase",
          cardName: "Sapphire Reserve",
          cardDigits: "0402",
          frequency: "4 weeks",
          lastUsed: "2/4/2022",
          nextUse: "2/5/2022",
        },
      ],
      notifications: [{
        type: "Alert",
        message: "User Chase Sapphire Reserve card by 2/5/2022"
      }]
    });

    // User created
    userCreated(uid);
  };

  return (
    <View style={styles.container}>
      <InputField
        placeholderText="First Name"
        icon="user"
        text={(text) => setFirstName(text)}
      />
      <InputField
        placeholderText="Last Name"
        icon="user"
        text={(text) => setLastName(text)}
      />
      <InputField
        placeholderText="Email"
        icon="envelope"
        text={(text) => setEmail(text)}
      />
      <InputField
        placeholderText="Password"
        icon="lock"
        text={(text) => setPassword(text)}
        isPassword="true"
      />
      <PrimaryButton title="Sign up" pressed={sendInfo} />
      <View style={styles.horizontalLine} />
      <Text style={styles.link} onPress={props.haveAccount}>
        Already have an account?
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
    top: height/-2.7,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: height/28,
    flex: 1, 
    alignItems: "center"
  },
  link: {
    color: "#0A84FF",
    textAlign: "center",
    marginTop: height/28,
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: width/1.2,
  },
});

export default Signup;
