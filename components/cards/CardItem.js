import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CardItem = (props) => {

  return (
    <View style={styles.container}>
      <Text>CardItem</Text>
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1.5,
    height: 120,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    flex: 1,
  },
});

export default CardItem;
