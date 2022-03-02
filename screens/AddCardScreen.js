import { StyleSheet, SafeAreaView, Text, Image } from "react-native";
import React, { useState } from "react";
import DangerButton from "../components/buttons/DangerButton";
import PrimaryButton from "../components/buttons/PrimaryButton";
import CardItem from "../components/cards/CardItem";
import InputField from "../components/inputs/InputField";
import { auth } from "../firebase";
import { useNavigation, useRoute } from "@react-navigation/native";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const AddCardScreen = () => {
  // State
  const [bankName, setBankName] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardDigits, setCardDigits] = useState("");
  const [lastUsed, setLastUsed] = useState("");
  const [fruquency, setFrequency] = useState("");

  // Navigation
  const navigation = useNavigation();

  // Card added
  const cardAdded = () => {
    alert("Card added")
    navigation.navigate("Home")
  }

  // User data
  const route = useRoute();
  const uid = route.params.uid;
  

  // Add card
  const addCard = async () => {
    console.log(uid)
    // Next date of use
    const nextUse = "2/6/2022";
    const userDoc = doc(db, "users", uid);
    const newCard = await updateDoc(userDoc, {
      cards: arrayUnion({
        bankName: bankName,
        cardName: cardName,
        cardDigits: cardDigits,
        lastUsed: lastUsed,
        fruquency: fruquency,
        nextUse: nextUse,
      }),
    });
  
    // Card added
      cardAdded()
  
  };

  // Remove this shit
  const getCurrentUserData = () => {
    console.log(auth.currentUser);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add Card</Text>
      <InputField
        placeholderText="Bank name"
        text={(text) => setBankName(text)}
      />
      <InputField
        placeholderText="Card name"
        text={(text) => setCardName(text)}
      />
      <InputField
        placeholderText="Last 4 digits"
        text={(text) => setCardDigits(text)}
      />
      <InputField
        placeholderText="Date of last use"
        text={(text) => setLastUsed(text)}
      />
      <InputField
        placeholderText="Use frequency"
        text={(text) => setFrequency(text)}
      />
      <PrimaryButton title="Save" pressed={addCard} />
      <DangerButton title="Cancel" pressed={() => navigation.goBack()} />
      <DangerButton title="User" pressed={getCurrentUserData} />
    </SafeAreaView>
  );
};

export default AddCardScreen;

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
