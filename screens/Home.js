import { View, FlatList, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import CardItem from "../components/cards/CardItem";
import { v4 as uuid } from "uuid";

const Home = (props) => {
  const cards = props.userInfo.cards;
  return (
    <View>
      <FlatList
        data={cards}
        renderItem={({ card }) => <CardItem cardInfo={card} />}
        keyExtractor={() => uuid()}
      />
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 5.5,
    height: 120,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    flex: 1,
  },
});

export default Home;
