import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import React from "react";

const AddCardButton = (props) => {
  return (
    <View style={styles.container}>
      <Button
        icon={{
          name: 'plus',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        buttonStyle={{
          backgroundColor: "#0A84FF",
          borderWidth: 1.5,
          borderColor: "white",
          borderRadius: 30,
          height: 50,
          width: 50
        }}
        containerStyle={{
          width: 50,
          marginHorizontal: 50,
          marginVertical: 10,
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

export default AddCardButton;
