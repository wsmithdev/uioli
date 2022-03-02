import { View, Text } from 'react-native'
import React, { useState } from 'react'
import InputField from "../components/inputs/InputField";
import DangerButton from "../components/buttons/DangerButton";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const Add = (props) => {

  const userInfo = props.userInfo
  const uid = props.uid
  console.log(uid)

   // State
   const [bankName, setBankName] = useState("");
   const [cardName, setCardName] = useState("");
   const [cardDigits, setCardDigits] = useState("");
   const [lastUsed, setLastUsed] = useState("");
   const [fruquency, setFrequency] = useState("");


   // Card added
  const cardAdded = () => {
    alert("Card added")
  }

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

  // Cancel
  const cancel = () => {
    
  }

  return (
    <View>
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
      <DangerButton title="Cancel" pressed={() => {}} />
    </View>
  )
}

export default Add