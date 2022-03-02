import { StyleSheet, SafeAreaView, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import AddCardButton from "../components/buttons/AddCardButton";
import CardItem from "../components/cards/CardItem";
import { auth, db } from "../firebase";
import { useNavigation, useRoute } from "@react-navigation/native";
import { doc, getDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";

const HomeScreen = () => {
  // State
  const [firstName, setFirstName] = useState("");
  const [cards, setCards] = useState([]);
  const [userUid, serUserUid] = useState("");
  let uid;

  // Navigation
  const navigation = useNavigation();

  // Route
  const route = useRoute();

  // Get user data
  const getUserData = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Set first name
      setFirstName(docSnap.data().firstName);

      // Create card components
      setCards(docSnap.data().cards);
    }
  };

  // Load initial data
  useEffect(() => {
    uid = route.params.uid;
    serUserUid(uid);
    getUserData(uid);
  }, []);

  // Sign out
  const signOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Welcome");
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, {firstName}</Text>
      <FlatList data={cards} renderItem={({ card }) => <CardItem />} keyExtractor={() => uuid()}/>
      <PrimaryButton title="Log out" pressed={signOut} />
      <AddCardButton
        pressed={() => navigation.navigate("AddCard", { uid: userUid })}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

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
