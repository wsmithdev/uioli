import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import React from "react";

const PrimaryButton = (props) => {
  return (
    <View style={styles.container}>
      <Button
        title={props.title}
        buttonStyle={{
          backgroundColor: "#0A84FF",
          borderWidth: 1.5,
          borderColor: "white",
          borderRadius: 30,
        }}
        containerStyle={{
          width: 300,
          marginHorizontal: 50,
          marginVertical: 20
        }}
        titleStyle={{ fontWeight: "600", fontSize: 20}}
        onPress={props.pressed}
      />
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  }
});

export default PrimaryButton;
